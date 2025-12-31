<script>
  import PortfolioItem from './components/PortfolioItem.svelte';
  import Publication from './components/Publication.svelte';
  const links = [
    { name: 'home', url: '/' },
    { name: 'publications', url: '#publications'},
    { name: 'cv', url: '/files/vanamburg-cv-dec25.pdf' },
  ];
  const publications = [
    {
      title: 'The Emergence of Complex Behavior in Large-Scale Ecological Environments',
      authors: 'Joseph Bejjani, Chase Van Amburg, Chengrui Wang, Chloe Huangyuan Su, Sarah M. Pratt, Yasin Mazloumi, Naeem Khoshnevis, Sham M. Kakade, Kianté Brantley, Aaron Walsman',
      link: 'https://doi.org/10.48550/arXiv.2510.18221',
      venue: 'arXiv, Submitted'
    },
    {
      title: 'DIRT: The Distributed Intelligent Replicator Toolkit',
      authors: 'Chengrui Wang, Chase Van Amburg, Chloe Huangyuan Su, Joseph Bejjani, Sarah M. Pratt, Yasin Mazloumi, Naeem Khoshnevis, Sham M. Kakade, Kianté Brantley, Aaron Walsman',
      link: '/files/papers/dirt-preprint.pdf',
      venue: 'arXiv, Poster at ALife 2025'
    },
    {
      title: 'Pandemic-Potential Viruses are a Blind Spot for Frontier Open-Source LLMs',
      authors: 'Laura Luebbert, Yasha Ektefaie, Arya S. Rao, Colby Wilkason, Dolo Nosamiefan, Olivia Achonduh-Atijegbe, Harouna Soumare, Adefoye Precious Adebayo, Olufemi Olulaja, Judith Amadi, Nicholas Oyejide, Funmilayo Olayiwola, Etim Henshaw, Yusuf Okocha, Nkechinyere Nwachukwu, Elechi Friday Ewah, Sylvanus Okoro, Ebenezer Nwakpakpa, Peter Okokhere, Kelly Iraoyah, Joseph Okoeguale, Ireti Dada, Andy Burris, Karlie Zhao, Ellory Laning, Chase Van Amburg, Paul Cronan, Ben Fry, Christian Happi, Al Ozonoff, Pardis C. Sabeti',
      link: 'https://doi.org/10.64898/2025.12.04.25341642',
      venue: 'NeurIPS 2025 Workshop on GenAI for Health'
    },
    {
      title: 'Automated Detection of an Insect-Induced Keystone Vegetation Phenotype Using Airborne LiDAR',
      authors: "Zhengyang Wang, Robert Huben, Peter B. Boucher, Chase Van Amburg, Jimmy Zeng, Nina Chung, Jocelyn Wang, Jeffrey King, Richard J. Knecht, Ivy Ng'iru, Augustine Baraza, Christopher C. M. Baker, Dino J. Martins, Naomi E. Pierce, Andrew B. Davies",
      link: 'https://doi.org/10.1111/2041-210X.14298',
      venue: 'Methods in Ecology and Evolution'
    },
  ];

  const projects = [
    {
      title: 'Lookout',
      team: 'Fathom Information Design',
      desc: 'Lightweight pathogen surveillance software designed for public health officials across the world.',
      img: '/assets/images/lo1.png',
      link: 'https://sl.sentinel.network/outbreak/',
      alt: 'lookout pathogen surveillance software'
    },
    {
      title: 'Rowboat',
      team: 'Fathom Information Design',
      desc: 'A lightning fast tool for understanding large datasets.',
      img: '/assets/images/rb1.png',
      link: 'https://rowboat.net/',
      alt: 'rowboat spreadsheet visualization software'
    }
  ];

  const portfolioItems = [
    {
      title: 'Radial Family Tree',
      desc: 'Visualizes the family history of a simulated population with 32 founders.',
      img: '/assets/images/ftree.png',
      link: './artifacts/radial-tree',
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
  <a class="headline" href="/">chase</a>
  <nav class="links">
    {#each links as link}
    <div class="link-container">
      <a 
        href={link.url} 
        target={link.url.includes("/files") ? "_blank" : undefined}
        rel={link.url.includes("/files") ? "noopener noreferrer" : undefined} 
        class="link"
      >
        {link.name}
      </a>
    </div>
    {/each}
  </nav>
  <p class="sutext">I am a mathematical biologist and computer scientist studying cultural evolution with Prof. Marc Feldman at Stanford.</p>
  <p class="sutext">Evolution is a physical process that has created the diversity of the natural world, forming entities that become progressively more efficient at using information over time. I believe understanding this process can help us 1) design social policies that account for population resource and information dynamics and 2) develop objective-free learning algorithms to create new forms of computational intelligence.</p>
  <div class="affiliations">
    <span class="bold">Current Affiliations:</span>
    <ul>
      <li>Department of Biology, Stanford</li>
      <li>Kempner Institute, Harvard</li>
    </ul>
  </div>

  <div class="content about" id="projects">
    <div class="portfolio-section">
      <div class="portfolio-section-header">team projects</div>
      <div class="portfolio-items">
        {#each projects as item}
          <PortfolioItem
            title={item.title}
            team={item.team}
            desc={item.desc}
            img={item.img}
            alt={item.alt}
            link={item.link || ''}
          />
        {/each}
      </div>
    </div>
  </div>

  <div class="content about" id="artifacts">
    <div class="portfolio-section">
      <div class="portfolio-section-header">artifacts</div>
      <div class="portfolio-items">
        {#each portfolioItems as item}
          <PortfolioItem
            title={item.title}
            desc={item.desc}
            img={item.img}
            alt={item.alt}
            link={item.link || ''}
          />
        {/each}
      </div>
    </div>
  </div>

  <div class="content about" id="publications">
    <div class="portfolio-section">
      <div class="portfolio-section-header">publications</div>
      <div class="publications">
        {#each publications as item}
          <Publication
            title={item.title}
            authors={item.authors}
            link={item.link}
            venue={item.venue}
          />
        {/each}
      </div>
    </div>
  </div>

  
</main>