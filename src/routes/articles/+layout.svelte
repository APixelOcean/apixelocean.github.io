<script>
  import { onMount } from 'svelte';
  import { palette, switchPalette, setPalette, moonSVG, sunSVG } from '../js/palette.js';

  onMount(() => {
    setPalette($palette);
  });
</script>

<div class="container">
  <header>
    <div class="article-header">
      <div class="logo-container">
        <button type="button" id="palette-button" aria-label="Switch Color Palette"  on:click={switchPalette}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 28 28" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path
              d="M9 0h9M7 1h13M5 2h4M11 2h11M4 3h4M9 3h2M12 3h4M19 3h4M3 4h1M5 4h11M20 4h4M2 5h1M4 5h2M7 5h11M20 5h1M23 5h2M1 6h1M3 6h23M3 7h2M6 7h2M10 7h7M18 7h8M0 8h1M5 8h3M10 8h2M15 8h3M19 8h1M22 8h5M4 9h2M7 9h4M16 9h2M19 9h1M23 9h4M5 10h5M12 10h3M16 10h5M23 10h5M2 11h3M6 11h4M11 11h4M16 11h12M5 12h1M7 12h3M11 12h4M16 12h12M6 13h6M15 13h13M7 14h5M14 14h2M18 14h10M1 15h1M7 15h9M18 15h10M1 16h2M7 16h3M13 16h5M20 16h5M26 16h2M2 17h2M7 17h2M10 17h3M14 17h4M20 17h1M23 17h5M6 18h4M13 18h1M15 18h6M23 18h1M26 18h1M0 19h1M4 19h5M14 19h1M17 19h6M25 19h2M1 20h1M6 20h2M17 20h6M24 20h2M6 21h2M15 21h4M20 21h2M24 21h2M7 22h1M9 22h2M16 22h5M24 22h1M3 23h1M10 23h3M23 23h1M4 24h1M18 24h2M17 25h1M10 27h1M12 27h1" />
          </svg>
        </button>
      </div>
      <div class="home-container">
        <ul class="nav">
          <li>
            <a class="button-section" href="/">home</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    <div class="article-container">
      <div class="article-content">
        <slot></slot>
      </div>
    </div>
  </main>
  <footer>oh hi there. how did ya find me?</footer>
</div>