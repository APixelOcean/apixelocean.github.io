<script>
  import WorkItem from './WorkItem.svelte';
  const links = [
    { name: 'home', url: '/' },
    { name: 'about', url: '/about' },
    { name: 'portfolio', url: '/portfolio' },
    { name: 'work', url: '/work' }
  ];

  const years = [
    { year: 2015, title: "Harvard", details: "B.A. in Evolutionary Biology and Applied Math" },
    { year: 2019, title: "Fathom", details: "Developer — tools for pathogen surveillance" },
    { year: 2021, title: "Stanford", details: "Visiting researcher, learning systems" },
    { year: 2024, title: "Present", details: "Independent work" }
  ];

  const workItems = [
    {
      title: 'Domestication as Gene-Culture Coevolution',
      period: 'Present',
      advisor: 'Marc Feldman',
      desc: 'We develop a formal model of domestication between a culturally-transmitting population (e.g. humans) and a genetically-transmitting population (e.g. livestock).'
    },
    {
      title: 'Emergent Behavior in Large-Scale Ecological Environments',
      period: '2025',
      advisor: 'Aaron Walsman',
      desc: 'We study the evolution of behavior in a massive-scale agent-based ecosystem simulation. The system is defined by reproduction with mutation and variable survival due to resource constraints and environmental structure.'
    },
  ];
</script>

<main class="container">
  <nav class="links-header">
    {#each links as link}
    <div class="link-container">
      [<a href={link.url} class="link">{link.name}</a>]
    </div>
    {/each}
  </nav>
  <div class="content about">
    <div class="portfolio-section">
      <div class="portfolio-section-header">/research</div>
      <div class="work-items">
        {#each workItems as item}
          <WorkItem
            title={item.title}
            period={item.period}
            advisor={item.advisor}
            institution={item.institution}
            desc={item.desc}
          />
        {/each}
      </div>
    </div>
  </div>

  
</main>