<script>
	import { filter } from 'd3';
	import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  let selected = 'command';


  // Projects
  let openProject = null;
  let openPost = null;
  let search = '';

	const projects = [
		// { id: 'proj1', name: 'visualizing evolutionary processes', details: 'details for project one' },
		// { id: 'proj2', name: 'project two', details: 'details for project two' },
		// { id: 'proj3', name: 'project three', details: 'details for project three' },
	];
	function safeRegex(input) {
		try {
			return new RegExp(input, 'i');
		} catch (e) {
			return null;
		}
	}

	$: regex = safeRegex(search);
	$: filteredProjects = regex
		? projects.filter(p => regex.test(p.name))
		: projects;
  
  function highlightMatch(text) {
		if (!regex) return text;
		const match = text.match(regex);
		if (!match) return text;

		const start = match.index;
		const end = start + match[0].length;
		return `${text.slice(0, start)}<mark>${text.slice(start, end)}</mark>${text.slice(end)}`;
	}

  const posts = [
    { id: 'post1', name: 'first post', details: 'pretty much just a test', date: 'August 8th, 2025'}
  ];
  $: filteredPosts = regex
    ? posts.filter(w => regex.test(w.name))
    : posts;
</script>

<main>
  <div class="main-container">
    <div class="terminal">
      <div class="terminal-header">
        <div>
          {#if selected === 'command'}
            <span>command /</span>
          {:else if selected === 'who'}
            <span><button class="terminal-header-button" on:click={() => selected = 'command'}>&lt; command</button> / who</span>
          {:else if selected === 'projects'}
            <span><button class="terminal-header-button" on:click={() => selected = 'command'}>&lt; command</button> / projects</span>
          {:else if selected === 'writing'}
            <span><button class="terminal-header-button" on:click={() => selected = 'command'}>&lt; command</button> / writing</span>
          {:else if selected === 'contact'}
            <span><button class="terminal-header-button" on:click={() => selected = 'command'}>&lt; command</button> / contact</span>
          {/if}
        </div>
        <span class="blinking-light"></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-command">
          {#if selected === 'command'}
            <div transition:slide>
              <p>hello, i'm <em>chase</em>.</p>
              <p>what would you like to see?</p>
              <ul class="terminal-command-list">
                <li><button class="terminal-command-button" on:click={() => selected = 'who'}>&gt; who</button></li>
                <li><button class="terminal-command-button" on:click={() => selected = 'projects'}>&gt; projects</button></li>
                <li><button class="terminal-command-button" on:click={() => selected = 'writing'}>&gt; writing</button></li>
                <li><button class="terminal-command-button" on:click={() => selected = 'contact'}>&gt; contact</button></li>
              </ul>
            </div>

          {:else if selected === 'who'}
            <div transition:slide>
              <p>i aim to apply evolutionary theory to the modern human world.</p>
              <p>as in, <em>how does evolutionary theory explain digital technologies, social organization, and learning?</em> we'll see how it goes; i have plenty to learn.</p>
              <br><p>i am a developer at <a href="https://fathom.info/" target="_blank">fathom information design</a>, where i've helped develop tools for pathogen surveillance. i graduated from harvard with degrees in evolutionary biology and applied math.</p>
              <br><p>see my <a href="/files/cv-resume-mar25.pdf" target="_blank">resumé</a> for further details.</p>
            </div>
          
          {:else if selected === 'projects'}

          <div class="project-search-container">
            <input
              type="text"
              placeholder=""
              bind:value={search}
              class="project-search"
            />
          </div>

            <ul class="terminal-project-list">
              {#each filteredProjects as project}
                <li class="project-entry">
                  <button
                    class="terminal-project-button"
                    on:click={() => openProject = openProject === project.id ? null : project.id}
                  >
                    <span
                      class="project-chevron"
                      class:open={openProject === project.id}
                    >&gt;</span>
                    <span>{@html highlightMatch(project.name)}</span>
                  </button>
            
                  {#if openProject === project.id}
                    <div class="project-details">
                      {project.details}
                    </div>
                  {/if}
                </li>
              {/each}
            </ul>


          {:else if selected === 'writing'}
          <div class="project-search-container">
            <input
              type="text"
              placeholder=""
              bind:value={search}
              class="project-search"
            />
          </div>

          <ul class="terminal-project-list">
              {#each filteredPosts as post}
                <li class="project-entry">
                  <a class="terminal-post-link" href="/writing/first-post">
                    <span
                      class="project-chevron"
                    >&gt;</span>
                    <div class="post-info">
                      <span class="post-name">{@html highlightMatch(post.name)}</span>
                      <span class="post-date">{post.date}</span>
                      <span class="post-details">{post.details}</span>
                    </div>
                    
                  </a>
            
                </li>
              {/each}
            </ul>

          {:else if selected === 'contact'}
          <div transition:slide>
            <p>if you're interested in the work i do, want to collaborate, or just want to talk. reach out to me at the following address:</p>
            <br><p><em>defaultmonad [at] gmail [dot] com</em></p><br>
            <p>i've been lucky enough to learn from many, including <a href="https://www.mcb.harvard.edu/directory/andrew-murray/" target="_blank">andrew murray</a>, <a href="https://www.oeb.harvard.edu/people/michael-desai" target="_blank">michael desai</a>, <a href="https://piercelab.oeb.harvard.edu/people/naomi-pierce" target="_blank">naomi pierce</a>, <a href="https://www.oeb.harvard.edu/people/martin-nowak" target="_blank">martin nowak</a>, <a href="https://fxb.harvard.edu/directory/satchit-balsari/" target="_blank">satchit balsari</a>, <a href="https://www.bewitched.com/" target="_blank">martin wattenberg</a>, and <a href="https://benfry.com/" target="_blank">ben fry</a>.</p>
            <p>i am especially influenced by the works of gottfried leibniz, konrad lorenz, carl jung, and leslie valiant.</p>
          </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>