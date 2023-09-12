<script>
	import projects from '../data/projects.json';
	import Tags from './Tags.svelte';
</script>

<ul>
	{#each projects as { name, url, description, tags }}
		<li>
			<article>
				<h3><a href={url}>{name}</a></h3>
				<p>{description}</p>
				<Tags {tags} />
			</article>
		</li>
	{/each}
</ul>

<style>
	article {
		display: grid;
		grid-template-rows: 1fr;
		row-gap: clamp(0.5rem, 3.5vw, 1.5rem);
	}

	ul {
		display: grid;
		grid-template-rows: 1fr;
		row-gap: clamp(3rem, 6.5vw, 6rem);
	}

	a {
		/* color: hsla(150, 95%, 50%, 1); */
		color: var(--accent-color);
	}

	a:hover {
		color: var(--text-color);
	}

	p {
		margin: 0;
	}
</style>
