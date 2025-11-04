<script>
	let { tags = [] } = $props();
</script>

<ul aria-label="Tags">
	{#each tags as tag (tag)}
		<li>{tag}</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(0.5rem, 3vw, 1rem);
		list-style-type: none;
		padding: 0;

		& li {
			background-color: var(--background-secondary);
			border-radius: var(--border-radius);
			color: var(--text-secondary);
			font-size: 1rem;
			padding: 0.25rem 0.5rem;
			text-transform: lowercase;
		}
	}
</style>
