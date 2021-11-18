<script>
	export let options;
	export let name;
	export let data;
</script>

<div class="color-scheme-controls">
	{#each options as option}
		<label for={option} class={data === option ? 'active' : ''}>
			<input
				type="radio"
				bind:group={data}
				id={option}
				value={option}
				{name}
				on:change
				class="sr-only"
			/>
			{option}
		</label>
	{/each}
</div>

<style>
	.color-scheme-controls {
		display: flex;
		margin: calc(var(--spacing) * 0.75) var(--spacing);
		justify-content: space-between;
		border: 1px solid var(--divider);
		border-radius: calc(var(--border-radius) * 1.5);
		padding: calc(var(--spacing-quarter) / 2);
		column-gap: calc(var(--spacing) / 8);
	}

	label {
		background-color: transparent;
		border-radius: var(--border-radius);
		cursor: pointer;
		display: block;
		font-size: inherit;
		margin: 0;
		padding: var(--spacing-quarter) var(--spacing-half);
		text-align: center;
		width: 100%;
		font-weight: 500;
		transition: color 200ms ease-in-out;
		text-transform: capitalize;
		color: var(--text-secondary);
	}

	label:hover:not(.active) {
		color: var(--accent-color);
	}

	.active {
		background-color: var(--accent-color);
		color: var(--bg-0);
		cursor: default;
	}
</style>
