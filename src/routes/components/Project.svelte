<script>
  export let project;
</script>

<div class="project-block">
  <div class="project-thumbnail-container" style={project.style}>
    <img src={project.img} alt={project.$$renderalt}>
  </div>
  <div class="project-info">
    <div class="project-title">{project.title}</div>
    <div class="project-date">{project.date}</div>
    <div class="project-description">{project.description}</div>
  </div>
</div>