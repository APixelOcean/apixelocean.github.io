<script>
  import Article from './components/Article.svelte';
  import Card from './components/Card.svelte';
  import Project from './components/Project.svelte';
  import Simulation from './components/Simulation.svelte';
  import Boids from './components/Boids.svelte';
  import SelfPortrait from "./components/SelfPortrait.svelte";
  import Pendulum from "./components/Pendulum.svelte";
  import Runner from "./components/Runner.svelte";
  import { storable } from './js/storable.js'


  let activeSection = storable('activeSection', 'writing');
  let searchQuery = '';

  let cards = [
    // {
    //   href: "/articles/trees-as-data",
    //   title: "Trees as Data",
    //   id: 1,
    //   total: 1,
    //   date: "Jan 2025",
    //   imgpath: "/assets/images/treedata1.jpg",
    //   description: `<p>Data and trees seem to hold almost opposite connotations. Data feels digital, numeric, and corporate; trees feel natural, grounded, and alive.</p>
    //     <p>So, how can we understand what it means to represent trees as data?</p>`
    // }
  ]

  let tags = []; // "Science", "Simulations", "Music"

  

  let filteredCards = cards;
  $: filteredCards = cards.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  let selection = "home";
  let selectorDetails = "Explore various facets of the website, include unique pages and views that provide insight into the thoughts and experiences of the website author.";

  function setHoverSelection(hoveredSelection) {
  }

  function restoreClickedSelection() {
  }

  function setSelection(clickedSelection) {
    selection = clickedSelection;
    updateSelectionText(selection);
  }

  function updateSelectionText(s) {
    switch (s) {
      case "home":
        selectorDetails = "Explore various facets of the website, include unique pages and views that provide insight into the thoughts and experiences of the website author."
        break;
      case "resume":
        selectorDetails = "Access a PDF of the website author's resumé."
        break;
      case "about":
        selectorDetails = "Learn about the website author; this section includes information about the website author's journey, experience, and future plans."
        break;
      case "projects":
        selectorDetails = "View a collection of projects from across disciplines, including evolution, data analysis, music, and education."
        break;
      case "collab":
        selectorDetails = "Access the values necessary to engage in digital communication with the website author, for whatever purpose the website visitor so chooses."
        break;
      default:
        selectorDetails = "Ah, you've encountered a bug. Should the website author be blamed, or should Svelte? It is simply up to the website visitor."
        break;
    }

  }

  function toggleShow(id) {
    activeSection.set(id);
  }

  import { onMount } from 'svelte';
  import { palette, switchPalette, setPalette, moonSVG, sunSVG } from './js/palette.js';
</script>

<main>
  <div class="container">
    <h1>CHASE<br>VAN AMBURG</h1>
    <h2>Mathematical Biology + Software Engineering</h2>
    <div class="link-list">
      <a href="#about">about</a>
      <a href="#work">work</a>
      <a href="#collaborate">collaborate</a>
      <a href="/files/cv-resume-mar25.pdf" target="_blank">resumé</a>
    </div>

    <div id="about" class="section">
      <h3 class="section-title">about</h3>
      <p>I'm a recent graduate employed by <a href="https://fathom.info/" target="_blank">Fathom Information Design</a>. On the side, I teach for <a href="https://www.curiouscardinals.com/" target="_blank">Curious Cardinals</a> and do intelligence research at the <a href="https://kempnerinstitute.harvard.edu/" target="_blank">Kempner Institute</a>.</p>
      <p>Evolution is my passion, especially understanding its behavior beyond genetics. My primary interests are</p>
      <ol>
        <li><b>intelligence</b>, the current peak of evolutionary complexity,</li>
        <li><b>ecology</b>, the study of interactions between evolved organisms, </li>
        <li><b>computation</b>, the rules which drive complex and dynamical systems, and</li>
        <li><b>design</b>, the abstract models used to create.</li>
      </ol>
      <p>I aim to extend the theory of evolution to anthropogenic systems, such as digital technology, through computational models.</p>
    </div>

    <div id="work" class="section">
      <h3 class="section-title">work</h3>
      <div id="projects" class="subsection">
        <h4 class="subsection-title">projects</h4>
        <ul>
          <li>coming soon</li>
        </ul>
      </div>

      <div id="articles" class="subsection">
        <h4 class="subsection-title">articles</h4>
        <ul>
          <li>coming soon</li>
        </ul>
      </div>
    </div>

    <div id="collaborate" class="section">
      <h3 class="section-title">collaborate</h3>
      <p>Interested in having a conversation or working together on a project? Please send an email to [first initial][last name] [at] college [dot] harvard [dot] [edu].</p>
      <p>I enjoy most things, including talking, doing scientific research, and developing a creative idea.</p>
    </div>


  </div>
</main>