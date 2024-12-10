<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  // Grid configuration
  const rows = 50;
  const cols = 50;
  const cellSize = 10;
  const width = cols * cellSize;
  const height = rows * cellSize;

  // Initial grid state (empty)
  let grid = Array.from({ length: rows }, () => Array(cols).fill(false));

  // Function to update grid state based on Conway's rules
  function updateGrid() {
    let newGrid = grid.map((row, i) =>
      row.map((cell, j) => {
        let neighbors = countNeighbors(i, j);
        // Conway's Game of Life rules
        if (cell) {
          return neighbors === 2 || neighbors === 3;
        } else {
          return neighbors === 3;
        }
      })
    );
    grid = newGrid;
  }

  // Function to count live neighbors of a cell
  function countNeighbors(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const nx = x + i;
        const ny = y + j;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny]) {
          count++;
        }
      }
    }
    return count;
  }

  // Create SVG grid using D3.js
  let svg;
  onMount(() => {
    svg = d3.select('#game-of-life')
      .attr('width', width)
      .attr('height', height);

    // Add cells to the grid
    const cells = svg.selectAll('rect')
      .data(grid.flat())
      .enter()
      .append('rect')
      .attr('x', (d, i) => (i % cols) * cellSize)
      .attr('y', (d, i) => Math.floor(i / cols) * cellSize)
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('fill', d => (d ? 'black' : 'white'))
      .attr('stroke', 'gray')
      .attr('stroke-width', 0.5);

    // Add click event listener for toggling cell state
    cells.on('click', (event, d) => {
      const rect = d3.select(event.target);
      const xPos = parseInt(rect.attr('x')) / cellSize;  // Get column from x position
      const yPos = parseInt(rect.attr('y')) / cellSize;  // Get row from y position

      // Toggle the cell state based on row and column
      grid[yPos][xPos] = !grid[yPos][xPos];
      renderGrid();
    });
  });

  // Render grid after an update
  function renderGrid() {
    svg.selectAll('rect')
      .data(grid.flat())
      .transition()
      .duration(100)
      .attr('fill', d => (d ? 'black' : 'white'));
  }

  // Function to initialize grid randomly
  function randomizeGrid() {
    grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() > 0.5) // 50% chance of being alive
    );
    renderGrid();
  }

  // Run the game loop every 100ms
  let interval;
  function startGame() {
    interval = setInterval(() => {
      updateGrid();
      renderGrid();
    }, 100);
  }

  // Stop the game
  function stopGame() {
    clearInterval(interval);
  }

  // Reset the grid to empty state
  function resetGrid() {
    grid = Array.from({ length: rows }, () => Array(cols).fill(false));
    renderGrid();
  }
</script>

<style>
  svg {
    border: 1px solid var(--p1);
    margin: 20px auto;
    display: block;
  }

  .controls {
    text-align: center;
    margin-top: 20px;
  }

  button {
    margin: 5px;
    padding: 10px;
    font-size: 14px;
  }
</style>

<svg id="game-of-life"></svg>
<div class="controls">
  <button on:click={startGame}>Start</button>
  <button on:click={stopGame}>Stop</button>
  <button on:click={resetGrid}>Reset</button>
  <button on:click={randomizeGrid}>Randomize</button>
</div>
