<script>
	import Tags from './Tags.svelte';

	export let projects;
</script>

<ul>
	{#each projects as { name, url, description, tags, content }, index (name)}
		<li>
			<article>
				<h3><a href={url} aria-label="Project {name}">{name}</a></h3>
				<p>{description}</p>
				<Tags {tags} />
			</article>
		</li>
	{/each}
</ul>

<style>
	article,
	ul {
		display: grid;
		grid-template-rows: 1fr;
	}

	article {
		row-gap: clamp(0.5rem, 3.5vw, 1.5rem);
	}

	ul {
		row-gap: clamp(3rem, 6.5vw, 6rem);
	}

	h3 {
		font-weight: 400;
	}

	p {
		margin: 0;
	}
</style>
