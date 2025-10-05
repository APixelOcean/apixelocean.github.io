<script>
  export let title;
  export let desc;
  export let period;
  export let advisor;
</script>

<div class="work-item">
  <div class="work-title">{title}</div>
  <div class="work-context">
    <div class="work-period">{period}</div>
    <div class="work-collaborator">Advised by <span class="advisor-name">{advisor}</span></div>

  </div>
  <div class="work-details">
    {desc}
  </div>
</div>