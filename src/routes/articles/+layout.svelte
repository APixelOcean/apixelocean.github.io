<script>
  import { onMount } from "svelte";

  let lastScrollY = 0;
  let isHidden = false;
  let ticking = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (currentScrollY > lastScrollY + 10) {
          isHidden = true; // Hide header when scrolling down
        } else if (currentScrollY < lastScrollY - 10) {
          isHidden = false; // Show header when scrolling up
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  };

  // Attach event listener when component mounts
  onMount(() => {
    document.querySelectorAll(".article-content a").forEach((link) => {
      if (link.href.startsWith("http")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div class={isHidden ? "article-header hidden" : "article-header"}>
  <a href="/" class="title">
    C
  </a>
</div>
<main>
  <div class="article-container">
    <div class="article-content">
      <slot></slot>
    </div>
  </div>
</main>
<footer>©2025 Chase Van Amburg</footer>