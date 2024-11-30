<script>
  // Define props for the component
  export let href = '/';         // Default link
  export let title = '';         // Title of the article
  export let date = '';          // Article's date
  export let description = '';  // Short description of the article
</script>

<div class="article-wrapper">
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