<script>
  export let title;
  export let authors;
  export let venue;
  export let link;
</script>

<a class="publication" href={link} target="_blank">
  <div class="pub-details">
    <div class="pub-title">{title}</div>
    <div class="pub-authors">{authors}.</div>
    <div class="pub-venue">{venue}.</div>
  </div>
</a>