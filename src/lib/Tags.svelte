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
		gap: 1rem;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}

	li {
		background-color: hsla(280, 10%, 12%, 1);
		border-radius: var(--border-radius);
		color: hsla(150, 95%, 85%, 1);
		padding: 0.5rem 0.5rem;
		text-transform: lowercase;
		font-size: 1rem;
	}
</style>
