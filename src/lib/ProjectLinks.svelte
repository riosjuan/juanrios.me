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
		font-size: var(--font-size-small);

		li {
			display: flex;
			align-items: center;
		}
	}

	@container (width > 24ch) {
		ul {
			flex-direction: row;

			li:not(:first-child)::before {
				color: var(--text-secondary);
				content: '|';
				display: inline-flex;
				opacity: 50%;
				padding-inline: var(--inline-spacing);
			}
		}
	}
</style>
