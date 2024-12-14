<script>
  import { onMount } from 'svelte';

  // Boid class to manage each boid object
  class Boid {
    constructor(x, y) {
      this.position = { x, y };
      this.velocity = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
      this.acceleration = { x: 0, y: 0 };
      this.maxSpeed = 2;
      this.maxForce = 0.05;
    }

    // Update the boid position and apply flocking rules
    update(boids) {
      this.flock(boids);
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // Wrap around screen edges
      if (this.position.x > window.innerWidth) this.position.x = 0;
      if (this.position.x < 0) this.position.x = window.innerWidth;
      if (this.position.y > window.innerHeight) this.position.y = 0;
      if (this.position.y < 0) this.position.y = window.innerHeight;

      this.velocity.x += this.acceleration.x;
      this.velocity.y += this.acceleration.y;
      this.velocity = this.limit(this.velocity, this.maxSpeed);
      this.acceleration.x = 0;
      this.acceleration.y = 0;
    }

    // Apply flocking rules
    flock(boids) {
      let align = this.align(boids);
      let cohesion = this.cohesion(boids);
      let separation = this.separation(boids);

      this.acceleration.x += align.x + cohesion.x + separation.x;
      this.acceleration.y += align.y + cohesion.y + separation.y;
    }

    // Calculate steering force for alignment (matching velocity with neighbors)
    align(boids) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
        if (this !== other && this.distance(this.position, other.position) < 100) {
          steering.x += other.velocity.x;
          steering.y += other.velocity.y;
          total++;
        }
      }
      if (total > 0) {
        steering.x /= total;
        steering.y /= total;
        steering = this.setMagnitude(steering, this.maxSpeed);
        steering.x -= this.velocity.x;
        steering.y -= this.velocity.y;
        steering = this.limit(steering, this.maxForce);
      }
      return steering;
    }

    // Calculate steering force for cohesion (moving towards the center of mass of neighbors)
    cohesion(boids) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
        if (this !== other && this.distance(this.position, other.position) < 100) {
          steering.x += other.position.x;
          steering.y += other.position.y;
          total++;
        }
      }
      if (total > 0) {
        steering.x /= total;
        steering.y /= total;
        steering.x -= this.position.x;
        steering.y -= this.position.y;
        steering = this.setMagnitude(steering, this.maxSpeed);
        steering.x -= this.velocity.x;
        steering.y -= this.velocity.y;
        steering = this.limit(steering, this.maxForce);
      }
      return steering;
    }

    // Calculate steering force for separation (avoid crowding neighbors)
    separation(boids) {
      let steering = { x: 0, y: 0 };
      let total = 0;
      for (let other of boids) {
        let d = this.distance(this.position, other.position);
        if (this !== other && d < 50) {
          let diff = { x: this.position.x - other.position.x, y: this.position.y - other.position.y };
          let magnitude = this.limit(diff, this.maxSpeed);
          steering.x += magnitude.x;
          steering.y += magnitude.y;
          total++;
        }
      }
      if (total > 0) {
        steering.x /= total;
        steering.y /= total;
      }
      return steering;
    }

    // Helper to calculate distance between two points
    distance(a, b) {
      return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    // Helper to limit the magnitude of a vector
    limit(vector, max) {
      let magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      if (magnitude > max) {
        vector.x = (vector.x / magnitude) * max;
        vector.y = (vector.y / magnitude) * max;
      }
      return vector;
    }

    // Set the magnitude of a vector to a specified value
    setMagnitude(vector, magnitude) {
      let currentMagnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      if (currentMagnitude > 0) {
        vector.x = (vector.x / currentMagnitude) * magnitude;
        vector.y = (vector.y / currentMagnitude) * magnitude;
      }
      return vector;
    }
  }

  let boids = [];
  let canvas;
  const numBoids = 200; // Adjust number of boids for performance

  // Initialize the boids
  onMount(() => {
    canvas = document.getElementById("boidCanvas");
    for (let i = 0; i < numBoids; i++) {
      boids.push(new Boid(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
    }
    animate();
  });

  // Animate the boids
  function animate() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update each boid
    boids.forEach(boid => {
      boid.update(boids);

      // Draw the boid
      ctx.beginPath();
      ctx.arc(boid.position.x, boid.position.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = "#0c8383";
      ctx.fill();
      ctx.closePath();
    });

    // Request the next frame
    requestAnimationFrame(animate);
  }
</script>

<style>
  canvas {
    position: fixed; /* Fix the canvas behind other content */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; /* Ensure the canvas is behind the content */
  }
</style>

<canvas id="boidCanvas" class="boids" width="500px" height="200px"></canvas>
