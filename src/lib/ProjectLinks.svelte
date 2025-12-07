<script>
	let { links = [] } = $props();
</script>

<div>
	<ul>
		{#each links as { name, url }}
			<li>
				<a href={url}>{name}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		container-type: inline-size;
	}

	ul {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
		row-gap: calc(var(--line-height) / 4);

		li {
			display: flex;
			align-items: center;
		}
	}

	a {
		color: var(--text-primary);
		font-size: var(--font-size-small);
	}

	@container (width > 280px) {
		ul {
			flex-direction: row;

			li:not(:first-child)::before {
				content: '|';
				display: inline-flex;
				padding-inline: var(--inline-spacing);
				font-size: 60%;
				color: var(--text-secondary);
			}
		}
	}
</style>
