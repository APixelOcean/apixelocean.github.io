<script>
  export let title;
  export let desc;
  export let img;
  export let alt;
</script>

<div class="portfolio-item">
  <img class="item-img" src={img} alt={alt} />
  <div class="item-details">
    <div class="item-title">{title}</div>
    <div class="item-desc">{desc}</div>
  </div>
</div>