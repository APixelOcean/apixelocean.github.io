let currentPalette = 0;
let activeSections = {'about': 1, 'writing': 1, 'simulations': 1, 'projects': 1};

const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 28 28" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path
              d="M9 0h9M7 1h13M5 2h4M11 2h11M4 3h4M9 3h2M12 3h4M19 3h4M3 4h1M5 4h11M20 4h4M2 5h1M4 5h2M7 5h11M20 5h1M23 5h2M1 6h1M3 6h23M3 7h2M6 7h2M10 7h7M18 7h8M0 8h1M5 8h3M10 8h2M15 8h3M19 8h1M22 8h5M4 9h2M7 9h4M16 9h2M19 9h1M23 9h4M5 10h5M12 10h3M16 10h5M23 10h5M2 11h3M6 11h4M11 11h4M16 11h12M5 12h1M7 12h3M11 12h4M16 12h12M6 13h6M15 13h13M7 14h5M14 14h2M18 14h10M1 15h1M7 15h9M18 15h10M1 16h2M7 16h3M13 16h5M20 16h5M26 16h2M2 17h2M7 17h2M10 17h3M14 17h4M20 17h1M23 17h5M6 18h4M13 18h1M15 18h6M23 18h1M26 18h1M0 19h1M4 19h5M14 19h1M17 19h6M25 19h2M1 20h1M6 20h2M17 20h6M24 20h2M6 21h2M15 21h4M20 21h2M24 21h2M7 22h1M9 22h2M16 22h5M24 22h1M3 23h1M10 23h3M23 23h1M4 24h1M18 24h2M17 25h1M10 27h1M12 27h1" />
          </svg>`;
const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 27 27" shape-rendering="crispEdges">
<metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
<path d="M13 0h1M13 1h1M13 2h1M3 3h1M13 3h1M23 3h1M4 4h1M13 4h1M22 4h1M5 5h1M21 5h1M6 6h1M11 6h5M20 6h1M9 7h9M8 8h2M12 8h7M7 9h2M11 9h9M7 10h2M10 10h10M6 11h2M10 11h11M6 12h2M9 12h12M0 13h5M6 13h15M22 13h5M6 14h13M20 14h1M6 15h13M20 15h1M7 16h11M19 16h1M7 17h13M8 18h11M9 19h9M6 20h1M11 20h5M20 20h1M5 21h1M21 21h1M4 22h1M13 22h1M22 22h1M3 23h1M13 23h1M23 23h1M13 24h1M13 25h1M13 26h1" />
</svg>`;

function switchPalette(button) {
  // Select the link element for the palette

  currentPalette = (currentPalette + 1) % 2;
  setPalette(button, currentPalette);
  localStorage.setItem('selectedPalette', currentPalette);
}

function setPalette(button, i) {
  const paletteLink = document.getElementById('palette-stylesheet');
  paletteLink.href = `./src/style/palettes/palette${i + 1}.css`;
  if (i == 0) {
    button.innerHTML = moonSVG;
  } else if (i == 1) {
    button.innerHTML = sunSVG;
  }
}

function toggleShow(button, id) {
  const section = document.getElementById(id);
  activeSections[id] = (activeSections[id] + 1) % 2;
  section.classList.toggle("hidden")
  button.classList.toggle("pressed")

  updateColumnVisibility();
}

function updateColumnVisibility() {
  const leftColumn = document.getElementById('column-left')
  const hideLeftColumn = activeSections['about'] == 0 && activeSections['writing'] == 0 && activeSections['simulations'] == 0;
  const leftColumnHidden = leftColumn.classList.contains("hidden");
  if (hideLeftColumn && !leftColumnHidden) {
    leftColumn.classList.toggle("hidden", true);
  } else if (!hideLeftColumn && leftColumnHidden){
    leftColumn.classList.toggle("hidden", false);
  }

  const rightColumn = document.getElementById('column-right')
  const hideRightColumn = activeSections['projects'] == 0;
  const rightColumnHidden = rightColumn.classList.contains("hidden");
  if (hideRightColumn && !rightColumnHidden) {
    rightColumn.classList.toggle("hidden", true);
  } else if (!hideRightColumn && rightColumnHidden){
    rightColumn.classList.toggle("hidden", false);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('palette-button');
  const savedPalette = localStorage.getItem('selectedPalette') || "0";
  currentPalette = parseInt(savedPalette);
  setPalette(button, currentPalette);
});