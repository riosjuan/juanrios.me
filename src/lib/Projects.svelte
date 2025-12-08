<script>
	import Tags from './Tags.svelte';
	import ProjectLinks from './ProjectLinks.svelte';

	let { projects } = $props();
</script>

<ul>
	{#each projects as { name, url, tags, description, links }}
		<li>
			<article>
				<h3>
					<a href={url}>{name}</a>
				</h3>
				<p>{description}</p>
				{#if links}
					<ProjectLinks {links} />
				{/if}
				<Tags {tags} />
			</article>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		row-gap: calc(var(--line-height) * 2);
	}

	article {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--line-height) / 2);
	}

	p {
		margin: 0;
	}
</style>
