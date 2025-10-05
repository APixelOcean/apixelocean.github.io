<script>
  const links = [
    { name: 'home', url: '/' },
    { name: 'about', url: '/about' },
    { name: 'portfolio', url: '/portfolio' },
    { name: 'work', url: '/work' }
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

    <p>Hey, how's it going? I'm Chase. Thanks for taking the time to visit my website.</p>
    <p>Here's my <a href="/files/cv-resume-mar25.pdf" target="_blank">resumé</a>.</p>
    <p>I'm interested in where this society is going, and how humans are doing in the modern world. The Industrial and Digital Revolutions have rapidly changed the social fabric of our world, and I think evolutionary models are the best way to understand what this means. I want to apply evolutionary theory to the digital era.</p>
    <p>In application of these ideas, I'm committed to building robust and happy communities at different scales. I'm still in the studying phase of this plan. To me, this means understanding how people connect with others in cities, how people connect over the internet, and how people engage with technology.</p>
    <p>I also enjoy teaching, art, running, and nature. I try to be excited about the world. It's not too hard with all the great things out there.</p>
    <p>Drop me a line at defaultmonad [at] gmail [dot] com if you're interested in talking or collaborating.</p>
  </div>

  
</main>
