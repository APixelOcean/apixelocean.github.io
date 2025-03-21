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
  <div class="column misc">
    <div class="column-section selectors">
        <div class="selectors-list">
          <button class={selection === "home" ? "selector selected" : "selector"} 
          on:mouseover={() => setHoverSelection("home")} 
          on:focus={() => setHoverSelection("home")} 
          on:mouseleave={restoreClickedSelection} 
          on:click={() => setSelection("home")}
            >Home
          </button>
          <a href="/" class={selection === "resume" ? "selector selected" : "selector"} 
          on:mouseover={() => setHoverSelection("resume")} 
          on:focus={() => setHoverSelection("resume")} 
          on:mouseleave={restoreClickedSelection} 
            >Resumé
          </a>
          <!-- <a class="selector" target="_blank" href="/files/resume.pdf">Resumé</a> -->
          <button class={selection === "about" ? "selector selected" : "selector"} 
          on:mouseover={() => setHoverSelection("about")} 
          on:focus={() => setHoverSelection("about")} 
          on:mouseleave={restoreClickedSelection} 
          on:click={() => setSelection("about")}
            >About
          </button>
          <button class={selection === "projects" ? "selector selected" : "selector"} 
          on:mouseover={() => setHoverSelection("projects")} 
          on:focus={() => setHoverSelection("projects")} 
          on:mouseleave={restoreClickedSelection} 
          on:click={() => setSelection("projects")}
            >Projects
          </button>
          <button class={selection === "collab" ? "selector selected" : "selector"} 
          on:mouseover={() => setHoverSelection("collab")} 
          on:focus={() => setHoverSelection("collab")} 
          on:mouseleave={restoreClickedSelection} 
          on:click={() => setSelection("collab")}
            >Work With Me
          </button>
        </div>
        <div class="selectors-info">
          {selectorDetails}
        </div>
    </div>
    <div class="column-section titled" class:visually-hidden={selection !== "home"}>
      <div class="column-section-title" class:visually-hidden={selection !== "home"}>
        Statement
      </div>
      <div class="column-paragraph">
        <p>
          Evolution, as formalized by Darwin in the mid-1800s, is the directional change in populations of living organisms over time. Mechanisms such as natural selection and drift
          define how and why biological diversity arises and is maintained in the world.
        </p>
        <p>
          I believe that evolution acts not only on biological organisms, but to human-made constructs as well, including language, culture, objects, and digital technology.
          I aim to extend the theory of evolution to explain the existence of these constructs, primarily through theories of computation.
        </p>
      </div>
    </div>
  </div>

  <div class="column about" class:visually-hidden={selection !== "home"}>
    <div class="column-section about-section">
      <div class="big-name">
        Chase Van Amburg
      </div>
      <div class="grow">
      </div>
      
      <SelfPortrait />
      <div class="grow">
      </div>
      <div class="grow">
      </div>
      <div class="grow">
        <p><span class="item-name">Specialties</span>: Evolutionary Dynamics, Theories of Intelligence, Teaching, Complex Systems</p>
      </div>
      <div class="grow">
        <p><span class="item-name">Employer</span>: Fathom Information Design</p>
      </div>
      <div class="grow">
        <p><span class="item-name">Affiliations</span>: Kempner Institute for Natural and Artificial Intelligence</p>
      </div>
      <div class="grow">
        <p><span class="item-name">Location</span>: Boston, MA</p>
      </div>
      <div class="grow">
        <p><span class="item-name">Education</span>: M.S. in Applied Math, B.A. in Integrative Biology [Harvard]</p>
      </div>
      <div class="grow">
        <p><span class="item-name">Goal</span>: Develop computational theories of evolution.</p>
      </div>
    </div>
    <!-- <div class="column-section">
      <ul class="personal-list">
        <li>
          <span class="item-name">Specialties</span>: Evolutionary Dynamics, Theories of Intelligence, Teaching, Complex Systems
        </li>
        <li>
          <span class="item-name">Employer</span>: Fathom Information Design
        </li>
        <li>
          <span class="item-name">Affiliations</span>: Kempner Institute for Natural and Artificial Intelligence
        </li>
        <li>
          <span class="item-name">Location</span>: Boston, MA
        </li>
        <li>
          <span class="item-name">Education</span>: M.S. in Applied Math, B.A. in Integrative Biology [Harvard]
        </li>
        <li>
          <span class="item-name">Goal</span>: Develop computational theories of evolution.
        </li>
      </ul>
    </div> -->
    
  </div>

  <div class="column statement" class:visually-hidden={selection !== "home"}>
    <div class="column-section">
      <Pendulum />
    </div>
    <div class="column-section">
      <Runner />
    </div>
  </div>

  <div class="column column-wide" class:visually-hidden={selection === "home"}>
    <div class="column-section">
      <div class="placeholder">
        Under<br>Construction
      </div>
    </div>
  </div>
</main>