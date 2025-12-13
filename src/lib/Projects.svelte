<script>
	import Tags from './Tags.svelte';
	import ProjectLinks from './ProjectLinks.svelte';

	let { projects } = $props();
</script>

<ul>
	{#each projects as { name, url, tags, links, body }}
		<li>
			<article>
				<h3>
					<a href={url}>{name}</a>
				</h3>
				{#if body}
					<div class="project-body">{@html body}</div>
				{/if}
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
		list-style: none;
		margin: 0;
		padding: 0;
		row-gap: calc(var(--line-height) * 2);
	}

	article {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--line-height) / 2);
	}
</style>
