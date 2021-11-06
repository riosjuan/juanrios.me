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
		background-color: var(--bg-2);
		border-radius: var(--border-radius);
		color: var(--text-secondary);
		padding: var(--spacing-quarter) var(--spacing-half);
		text-transform: lowercase;
	}
</style>
