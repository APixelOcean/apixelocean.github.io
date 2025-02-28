<script>
  import Article from './components/Article.svelte';
  import Card from './components/Card.svelte';
  import Project from './components/Project.svelte';
  import Simulation from './components/Simulation.svelte';
  import Boids from './components/Boids.svelte';
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

  function toggleShow(id) {
    activeSection.set(id);
  }

  import { onMount } from 'svelte';
  import { palette, switchPalette, setPalette, moonSVG, sunSVG } from './js/palette.js';
</script>


<header>
  
  <div class="header-top">
    <div class="title">
      <p>Chase Van&nbsp;Amburg</p>
    </div>
  </div>
  <div class="header-bottom">
    <div class="bottom-wrapper">
      <div class="content-selection">
        {#each tags as tag}
        <button class="content-tag">{tag}</button>
        {/each}
      </div>
      <input class="search-box" type="text" bind:value={searchQuery} placeholder="Search . . ."> 
    </div>
  </div>
</header>
<main>
  <div class="card-container">
    <div class="about-me">
      <p>Please note this is under construction.</p>
      <p>I'm Chase. I'm into theories of intelligence, evolutionary computation, and telling stories with data.</p>
      <div class="portrait">
        <img src="/assets/images/portrait1.png" alt="A pixellated portrait of the website author, Chase Van Amburg.">
      </div>
      <p>I'm a developer and designer at <a href="https://fathom.info" class="link">Fathom Information Design</a>. Before that, I received my B.A. in Integrative Biology/Computer Science and M.S. in Applied Math from Harvard.</p>
      <p>Goal: Do something interesting.</p>
    </div>
    {#each filteredCards as card}
    <Card 
      href={card.href}
      title={card.title}
      id={card.id}
      total={card.total}
      date={card.date}
      imgpath={card.imgpath}
      description={card.description}
    />
    {/each}
  </div>
</main>
<footer>
  Reach out if you want to talk.
</footer>