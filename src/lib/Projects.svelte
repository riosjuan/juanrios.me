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
		font-size: var(--font-body);
		margin: 0 0 var(--spacing);
	}

	ul {
		display: grid;
		grid-template-rows: 1fr;
		row-gap: var(--spacing3x);
	}

	p {
		margin: 0 0 var(--spacing);
	}
</style>
