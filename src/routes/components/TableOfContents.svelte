<script>
  import { onMount } from "svelte";

  let headings = [];
  let isOpen = false;

  // Extract headers from the page
  const generateTOC = () => {
    headings = Array.from(document.querySelectorAll("h2, h3")).map((el) => ({
      text: el.innerText,
      id: el.id,
      level: el.tagName
    }));
  };

  onMount(() => {
    generateTOC();
  });

  const toggleTOC = () => {
    isOpen = !isOpen;
  };
</script>

<style>
  .toc-container {
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 250px;
  }

  .toc-title {
    font-weight: bold;
    cursor: pointer;
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin-top: 5px;
    display: none;
  }

  .toc-list.open {
    display: block;
  }

  .toc-list li {
    margin: 5px 0;
  }

  .toc-list a {
    text-decoration: none;
    color: #333;
  }

  .toc-list a:hover {
    text-decoration: underline;
  }
</style>

<div class="toc-container">
  <div class="toc-title" on:click={toggleTOC}>
    Table of Contents {isOpen ? "▼" : "▶"}
  </div>
  <ul class={`toc-list ${isOpen ? "open" : ""}`}>
    {#each headings as { text, id, level }}
      <li style="padding-left: {level === 'H3' ? '15px' : '0'};">
        <a href={"#" + id}>{text}</a>
      </li>
    {/each}
  </ul>
</div>
