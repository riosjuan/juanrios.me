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
		gap: var(--inline-spacing);
		list-style-type: none;
		padding: 0;

		& li {
			background-color: var(--background-secondary);
			border: 1px solid var(--border-color);
			border-radius: var(--border-radius);
			color: var(--text-secondary);
			font-size: 1rem;
			padding: calc(var(--block-spacing) / 4) var(--inline-spacing);
			text-transform: lowercase;
		}
	}
</style>
