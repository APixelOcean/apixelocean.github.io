<script>
  import { onMount } from "svelte";

  let canvasContainer;

  onMount(async () => {
    const p5 = (await import("p5")).default;

    const sketch = (p) => {
      const cols = 80;
      const rows = 80;
      const resolution = 3;
      let grid;

      // Create 2D array for grid
      function make2DArray(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = new Array(rows).fill(0);
        }
        return arr;
      }

      // Randomize grid state
      function randomizeGrid() {
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            grid[i][j] = p.floor(p.random(2)); // Randomly set each cell as alive or dead
          }
        }
      }

      p.setup = () => {
        let canvas = p.createCanvas(cols * resolution, rows * resolution);
        canvas.parent(canvasContainer);
        p.frameRate(16); // Slow down frame rate
        grid = make2DArray(cols, rows);
        randomizeGrid();

        canvas.mousePressed(() => {
          grid = make2DArray(cols, rows);
          randomizeGrid();
        });
        p.background(250, 250, 245);
      };

      p.draw = () => {
        p.background(250, 250, 245, 5);

        const centerX = p.width / 2;
        const centerY = p.height / 2;
        const outerRadius = p.min(p.width, p.height) / 2 - resolution;
        const innerRadius = 0;

        // Draw the grid with a circular shape
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * resolution + resolution / 2;
            let y = j * resolution + resolution / 2;

            // Check if the center of the cell is inside the circle
            let distance = p.dist(x, y, centerX, centerY);
            if (distance >= innerRadius && distance <= outerRadius) {
              if (grid[i][j] === 1) {
                p.fill(0);
                p.noStroke();
                p.rect(x - resolution / 2, y - resolution / 2, resolution, resolution); // Draw square cells
              }
            }
          }
        }

        grid = nextGeneration(grid);
      };

      function nextGeneration(grid) {
        let newGrid = make2DArray(cols, rows);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            let sum = 0;
            for (let x = -1; x <= 1; x++) {
              for (let y = -1; y <= 1; y++) {
                let col = (i + x + cols) % cols;
                let row = (j + y + rows) % rows;
                sum += grid[col][row];
              }
            }
            sum -= state; // Subtract self from sum

            if (state === 0 && sum === 3) {
              newGrid[i][j] = 1;
            } else if (state === 1 && (sum < 2 || sum > 3)) {
              newGrid[i][j] = 0;
            } else {
              newGrid[i][j] = state;
            }
          }
        }

        return newGrid;
      }

    };

    new p5(sketch);
  });
</script>

<div class="sketch-container" bind:this={canvasContainer}></div>
