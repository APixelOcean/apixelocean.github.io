<script>
  const links = [
    { name: 'home', url: '/' },
    { name: 'about', url: '/about' },
    { name: 'portfolio', url: '/portfolio' },
    { name: 'work', url: '/work' }
  ];
</script>

<main class="container">
  <a class="headline" href="/">chase</a>
  <p class="tagline">mathematical biologist +<br>software engineer</p>
  <div class="content">
    <img src="assets/images/cvpp.png" alt='selfie of website author' class='profile-pic'>
    <nav class="links">
      {#each links as link}
      <div class="link-container">
        [<a href={link.url} class="link">{link.name}</a>]
      </div>
      {/each}
    </nav>
  </div>

  
</main>