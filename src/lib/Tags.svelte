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
		flex-wrap: wrap;
		gap: clamp(0.5rem, 3vw, 1rem);
	}

	li {
		background-color: var(--bg-color-2);
		border-radius: 0.25rem;
		border-radius: var(--border-radius);
		color: var(--text-color-2);
		font-size: 1rem;
		padding: 0.25rem 0.5rem;
		text-transform: lowercase;
	}
</style>
