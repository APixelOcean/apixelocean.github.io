<script>
  export let title;
  export let desc;
  export let img;
  export let alt;
  export let link;
</script>

<a class="portfolio-item" href={link}>
  <img class="item-img" src={img} alt={alt} />
  <div class="item-details">
    <div class="item-title">{title}</div>
    <div class="item-desc">{desc}</div>
  </div>
</a>