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
			background-color: light-dark(var(--surface-secondary-light), var(--surface-secondary-dark));
			border-radius: 0.25rem;
			color: light-dark(var(--content-secondary-light), var(--content-secondary-dark));
			font-size: 1rem;
			padding: 0.25rem 0.5rem;
			text-transform: lowercase;
		}
	}
</style>
