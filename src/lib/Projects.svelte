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
	h3 {
		font-size: 2.5rem;
		margin: 0;
		font-weight: 300;
	}

	article {
		display: grid;
		grid-template-rows: 1fr;
		row-gap: 1.5rem;
	}

	ul {
		display: grid;
		grid-template-rows: 1fr;
		row-gap: 96px;
		list-style: none;
		padding: 0;
	}

	a {
		color: hsla(150, 95%, 50%, 1);
	}

	a:hover {
		color: var(--text-color);
	}

	p {
		margin: 0 0 var(--spacing);
	}
</style>
