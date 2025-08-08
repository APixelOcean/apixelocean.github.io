<script>
  import { onMount } from "svelte";

  let container;
  let lastScrollY = 0;
  let isHidden = false;

  function handleScroll() {
    const currentScrollY = container.scrollTop;

    // Always show header at the top
    if (currentScrollY <= 0) {
      isHidden = false;
    } else if (currentScrollY > lastScrollY + 10) {
      isHidden = true;
    } else if (currentScrollY < lastScrollY - 10) {
      isHidden = false;
    }

    lastScrollY = currentScrollY;
  }

  onMount(() => {
    // Open external links in new tab
    document.querySelectorAll(".writing-content a").forEach((link) => {
      if (link.href.startsWith("http")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<main>
  <header class:hidden={isHidden} class="writing-header">
    <a href="/" class="title">command &gt; writing</a>
  </header>

  <div class="writing-container" bind:this={container}>
    <div class="writing-content">
      <slot></slot>
    </div>
  </div>
</main>
