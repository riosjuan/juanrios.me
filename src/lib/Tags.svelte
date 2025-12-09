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
		margin: 0;
		padding: 0;

		& li {
			background-color: var(--background-secondary);
			border-radius: var(--border-radius);
			border: 1px solid var(--border-color);
			color: var(--text-secondary);
			font-size: var(--font-size-fixed);
			padding: calc(var(--block-spacing) / 4) var(--inline-spacing);
			text-transform: lowercase;
			line-height: var(--line-height);
		}
	}
</style>
