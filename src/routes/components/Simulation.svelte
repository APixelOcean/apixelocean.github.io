<script>
  export let id = -1;
  export let href = '/';
  export let title = '';
  export let imgPath = '';
  export let imgDesc = ''
  export let description = '';
</script>

<a class="simulation" id={id} href={href}>
  <div class="simulation-title">{@html title}</div>
  <div class="simulation-img">
    <img src={imgPath} alt={imgDesc}>
  </div>
  <div class="simulation-desc">{description}</div>
</a>