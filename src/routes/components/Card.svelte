<script>
  export let href = '/';
  export let title = '';
  export let id = -1;
  export let total = 1;
  export let date = '';
  export let imgpath = '';
  export let description = '';
</script>

<a class="card" href={href}>
  <div class="card-top">
    <div class="card-title">{title}</div>
    <div class="card-number">{id} / {total}</div>
  </div>
  <div class="card-subtitle">{date}</div>
  <div class="card-image">
    <img src="{imgpath}" alt="sim1">
  </div>
  <div class="card-details">
    {@html description}
  </div>
</a>