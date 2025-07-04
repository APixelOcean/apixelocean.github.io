<script>
  import Project from './components/Project.svelte';
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

  let projects = [
    {
      title: 'Smooth Cellular Automata',
      date: 'Spring 2022',
      description: 'A series of generalizations to Conway\'s Games, inspired by both Multi-Neighborhood Cellular Automata (MNCA) and Lenia.',
      img: 'assets/images/lenia.png',
      alt: 'Smooth cellular automaton in a transition state'
    },
    {
      title: 'Ant-Acacia Species Distribution',
      date: '2022',
      description: 'A research study on the distribution of four obligate ant symbionts of the whistling thorn acacia in Laikipia, Kenya.',
      img: 'assets/images/ants.png',
      alt: 'Map of acacia trees'
    },
    {
      title: 'Urban Microclimate in Gujarat',
      date: '2023',
      description: 'A pilot study with the Self Employed Women\'s Association to build evidence that climate outcomes are correlated with birthright.',
      img: 'assets/images/gujarat.png',
      alt: 'Map of gujarat colored by heat intensity'
    },
    {
      title: 'Harvard Racial Diversity',
      date: 'Fall 2023',
      description: 'A visual tool comparing racial diversity across different undergraduate majors over the past two decades.',
      img: 'assets/images/hrd.png',
      alt: 'Dashboard of pie charts colored by race in Harvard undergradute majors'
    },
    {
      title: 'PAVVY',
      date: 'Fall 2023',
      description: 'An ML pipeline that converts lecture video or audio into notes and multiple-choice quizzes grounded by keywords.',
      img: 'assets/images/pavvy.png',
      alt: 'Architecture diagram of ML/AI education tool pipeline'
    },
    {
      title: 'Roots of Boston',
      date: 'Spring 2024',
      description: 'A temporary exhibit for Boston\'s Museum of Science visualizing the stories of historical trees of Boston.',
      img: 'assets/images/roots.png',
      alt: 'Cartoon-style map of Boston with detailed story sidebar'
    },
    {
      title: 'Simulated Evolutionary Process',
      date: 'Spring 2025',
      description: 'A real-time visualizer for a finite population forward evolutionary simulation beginning with multiple lineages.',
      img: 'assets/images/ftreeh.png',
      alt: 'A series of colored rectangles representing life, births, and deaths of simulated organisms',
    },
    {
      title: 'Radial Family Tree',
      date: 'Spring 2025',
      description: 'A novel radial family tree visualization for a simulated evolutionary process of asexually-reproducing organisms.',
      img: 'assets/images/ftree.png',
      alt: 'A radial representation of a family tree',
      style: 'background-color: white; border: 1px solid var(--p1); padding: 0.25rem;'
    },
  ];
  projects.forEach((p, i) => {
    p.id = i;
  })
  console.log(projects);
  

  let filteredCards = cards;
  $: filteredCards = cards.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  let selection = "about";
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
    <div class="personal">

      <h1>CHASE<br>VAN AMBURG</h1>
      <h2>Mathematical Biology + Software Engineering</h2>
      <div class="link-list">
        <button class={selection === 'about' ? 'active' : ''} on:click={() => selection = 'about'}>
          about
        </button>
        <button class={selection === 'collaborate' ? 'active' : ''} on:click={() => selection = 'collaborate'}>
          collaborate
        </button>
        <a href="/files/cv-resume-mar25.pdf" target="_blank">resumé</a>
      </div>

      {#if selection === 'about'}
        <div id="about" class="section">
          <p>I'm a recent graduate employed by <a href="https://fathom.info/" target="_blank">Fathom Information Design</a>. On the side, I teach for <a href="https://www.curiouscardinals.com/" target="_blank">Curious Cardinals</a> and do intelligence research at the <a href="https://kempnerinstitute.harvard.edu/" target="_blank">Kempner Institute</a>.</p>
          <img src="assets/images/cvp_transparent.png" class="portrait" alt="Voronoi stippled selfie of website author">
          <p>I aim to extend the theory of evolution to anthropogenic systems, such as digital technology, through computational models.</p>
          <p>I've been lucky enough to learn from and work with <a href="https://www.mcb.harvard.edu/directory/andrew-murray/" target="_blank">Andrew Murray</a>, <a href="https://www.oeb.harvard.edu/people/michael-desai" target="_blank">Michael Desai</a>, <a href="https://piercelab.oeb.harvard.edu/people/naomi-pierce" target="_blank">Naomi Pierce</a>, <a href="https://www.oeb.harvard.edu/people/martin-nowak" target="_blank">Martin Nowak</a>, <a href="https://fxb.harvard.edu/directory/satchit-balsari/" target="_blank">Satchit Balsari</a>, <a href="https://www.bewitched.com/" target="_blank">Martin Wattenberg</a>, <a href="https://benfry.com/" target="_blank">Ben Fry</a>, and many more.</p>
        </div>
      {/if}
      {#if selection == 'collaborate'}
        <div id="collaborate" class="section">
          <p>Interested in having a conversation or working together on a project? Please send an email to defaultmonad  [at] gmail [dot] com.</p>
          <p>I enjoy most things, and try to have time for them.</p>
        </div>
      {/if}

      

    </div>
    <div class="blocks">

      <div id="projects" class="section">
        <!-- <h3 class="section-title">projects</h3> -->
        <div class="project-grid">
          {#each projects.slice().reverse() as project (project.id)}
            <Project {project} />
          {/each}
        </div>
      </div>
  
      <!-- <div id="writing" class="section">
        <h3 class="section-title">writing</h3>
  
        <div id="howto" class="subsection">
          <h4 class="subsection-title">how to</h4>
          <ul>
            <li>coming soon</li>
          </ul>
        </div>
  
        <div id="articles" class="subsection">
          <h4 class="subsection-title">articles</h4>
          
          <ul>
            <li><a href="/articles/introduction"><span class="work-title">introduction</span> <span class="date-span">(2025)</span><br>an intro to this website and its author</a></li>
          </ul>
        </div>
      </div> -->

    </div>


  </div>
</main>