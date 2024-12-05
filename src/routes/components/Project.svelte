<script>
  export let id = -1;
  export let href = '/';
  export let title = '';
  export let tags = '';
  export let description = '';
  export let img = '';
</script>

<a class="project" href={href} id={id}>
  <div class="project-details">
    <div class="project-overview">
      <div class="project-title">{title}</div>
      <div class="project-tags">Tags: {tags}</div>
    </div>
    <div class="project-desc">{description}</div>
  </div>
  <div class="project-image">{img}</div>
</a>