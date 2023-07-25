<script>
	let channels = [
		{ name: 'email', url: 'mailto:juanesteban.rios@gmail.com' },
		{ name: 'twitter', url: 'https://twitter.com/juanriosnl' },
		{ name: 'mastodon', url: 'https://mstdn.social/@juanriosnl' },
		{ name: 'github', url: 'https://github.com/riosjuan' },
		{ name: 'linkedIn', url: 'https://nl.linkedin.com/in/juanestebanrios' }
	];
</script>

<ul>
	{#each channels as channel}
		{#if channel.name === 'mastodon'}
			<li><a rel="me" href={channel.url}>{channel.name}</a></li>
		{:else}
			<li><a href={channel.url}>{channel.name}</a></li>
		{/if}
	{/each}
</ul>

<style>
	ul {
		column-gap: clamp(var(--spacing), 5vw, var(--spacing2x));
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--spacing);
	}

	a {
		text-transform: capitalize;
	}
</style>
