<script>
  import { onMount } from "svelte";

  let canvasContainer;

  onMount(async () => {
    const p5 = (await import("p5")).default;

    const sketch = (p) => {
      let circles = [];
      let centerX, centerY;

      class Circle {
        constructor(x, y, r) {
          this.x = x;
          this.y = y;
          this.r = r;
          this.vx = p.random(-2, 2);
          this.vy = p.random(-2, 2);
        }

        move() {
          let dx = centerX - this.x;
          let dy = centerY - this.y;
          let distance = p.sqrt(dx * dx + dy * dy);
          
          if (distance > 5) {
            this.vx += (dx / distance) * 0.2;
            this.vy += (dy / distance) * 0.2;
          }

          this.vx *= 0.95; // Damping
          this.vy *= 0.95;

          this.x += this.vx + p.random(-1, 1);
          this.y += this.vy + p.random(-1, 1);
        }

        checkCollision(other) {
          let dx = other.x - this.x;
          let dy = other.y - this.y;
          let distance = p.sqrt(dx * dx + dy * dy);
          let minDist = this.r + other.r;

          if (distance < minDist) {
            let angle = p.atan2(dy, dx);
            let overlap = minDist - distance;

            this.x -= p.cos(angle) * (overlap / 2);
            this.y -= p.sin(angle) * (overlap / 2);
            other.x += p.cos(angle) * (overlap / 2);
            other.y += p.sin(angle) * (overlap / 2);

            let tempVx = this.vx;
            let tempVy = this.vy;
            this.vx = other.vx;
            this.vy = other.vy;
            other.vx = tempVx;
            other.vy = tempVy;
          }
        }

        show() {
          p.fill(0);
          p.ellipse(this.x, this.y, this.r * 2);
        }

        clicked(mx, my) {
          return p.dist(mx, my, this.x, this.y) < this.r;
        }

        split() {
          let newR = this.r / 2;
          return [
            new Circle(this.x - newR - p.random(0, 2*newR), this.y + 2*p.random(-newR, newR), newR),
            new Circle(this.x + newR + p.random(0, 2*newR), this.y + 2*p.random(-newR, newR), newR),
          ];
        }
      }

      p.setup = () => {
        let canvas = p.createCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
        canvas.parent(canvasContainer);

        centerX = p.width / 2;
        centerY = p.height / 2;
        let initialRadius = Math.min(p.width, p.height) / 2.5;
        circles.push(new Circle(centerX, centerY, initialRadius));
      };

      p.draw = () => {
        p.background(250, 250, 245);
        
        for (let i = 0; i < circles.length; i++) {
          let c1 = circles[i];
          c1.move();
          
          for (let j = i + 1; j < circles.length; j++) {
            let c2 = circles[j];
            c1.checkCollision(c2);
          }

          c1.show();
        }
      };

      p.mousePressed = () => {
        let newCircles = [];
        for (let circle of circles) {
          if (circle.clicked(p.mouseX, p.mouseY) && circle.r > 5) {
            newCircles.push(...circle.split());
          } else {
            newCircles.push(circle);
          }
        }
        circles = newCircles;
      };

      p.windowResized = () => {
        p.resizeCanvas(canvasContainer.clientWidth/2, canvasContainer.clientHeight/2);
        centerX = p.width / 2;
        centerY = p.height / 2;
      };
    };

    new p5(sketch);
  });
</script>

<style>
  .sketch-container {
    width: 100%;
    height: 100%;
    min-height: 10rem;
    position: relative;
  }
</style>

<div class="sketch-container" bind:this={canvasContainer}></div>
