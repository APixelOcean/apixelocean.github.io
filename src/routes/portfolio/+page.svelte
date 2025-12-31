<script>
  import PortfolioItem from '../components/PortfolioItem.svelte';
  const links = [
    { name: 'home', url: '/' },
    { name: 'about', url: '/about' },
    { name: 'portfolio', url: '/portfolio' },
    { name: 'work', url: '/work' }
  ];

  const portfolioItems = [
    {
      title: 'Radial Family Tree',
      desc: 'Visualizes the family history of a simulated population with 32 founders.',
      img: '/assets/images/ftree.png',
      alt: 'radial evolutionary tree'
    },
    {
      title: 'Horizontal Family Tree',
      desc: 'A horizontal representation of an evolutionary simulation through time.',
      img: '/assets/images/ftreeh.png',
      alt: 'horizontal family tree'
    },
    {
      title: 'Weighted Voronoi Stippling',
      desc: 'Voronoi cells. With stippling. A classic.',
      img: '/assets/images/cvp_transparent.png',
      alt: 'horizontal family tree'
    }
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
      <div class="portfolio-section-header">/artifacts</div>
      <div class="portfolio-items">
        {#each portfolioItems as item}
          <PortfolioItem
            title={item.title}
            desc={item.desc}
            img={item.img}
            alt={item.alt}
          />
        {/each}
      </div>
    </div>
  </div>

  
</main>
