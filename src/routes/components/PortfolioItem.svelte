<script>
  export let title;
  export let desc;
  export let img;
  export let alt;
  export let link;
  export let team = '';
</script>

<a 
  class="portfolio-item" 
  href={link}
  target={link.includes("http") ? "_blank" : undefined}
  rel={link.includes("http") ? "noopener noreferrer" : undefined} 
>
  <img class="item-img" src={img} alt={alt} />
  <div class="item-details">
    <div class="item-header">
      <div class="item-title">{title}</div>
      {#if team}
        <div class="item-team">{team}</div>
      {/if}
    </div>
    <div class="item-desc">{desc}</div>
  </div>
</a>