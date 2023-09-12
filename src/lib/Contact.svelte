<script>
	let channels = [
		{ name: 'email', url: 'mailto:juanesteban.rios@gmail.com' },
		{ name: 'twitter', url: 'https://twitter.com/juanriosnl' },
		{ name: 'github', url: 'https://github.com/riosjuan' },
		{ name: 'linkedIn', url: 'https://nl.linkedin.com/in/juanestebanrios' }
	];
</script>

<ul>
	{#each channels as channel}
		<li><a href={channel.url}>{channel.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		column-gap: clamp(1.5rem, 3.5vw, 3rem);
		margin-bottom: 6rem;
	}

	li {
		line-height: 1;
	}

	a {
		font-size: 1rem;
		text-transform: capitalize;
		color: var(--accent-color);
		font-weight: var(--font-weight);
	}

	a:hover {
		color: var(--text-color);
	}
</style>
