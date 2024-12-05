<script>
  export let id = -1;
  export let href = '/';
  export let title = '';
  export let date = '';
  export let description = '';
</script>

<div class="article-wrapper" id={id}>
  <a class="article" href={href}>
    <div class="article-info">
      <div class="article-title">{title}</div>
      <div class="article-details">
        <div class="article-date">{date}</div>
      </div>
    </div>
    <div class="article-desc">
      {@html description}
    </div>
  </a>
</div>