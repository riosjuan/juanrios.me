<script>
  export let tags;
</script>

<ul>
  {#each tags as tag}
    <li>{tag}</li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-half);
    flex-wrap: wrap;
  }

  li {
    padding: var(--spacing-quarter) var(--spacing-half);
    border-radius: --border-radius;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
  }
</style>
