<script>
	import Tags from './Tags.svelte';
	import SvgGrabber from '../projects/svg-grabber.md';

	let { projects } = $props();
</script>

<ul>
	{#each projects as { name, url, tags, description }, index (name)}
		<li>
			<article>
				<h3>
					<a href={url} aria-label={`View project ${name}`}>{name}</a>
				</h3>
				{#if name === 'svg-grabber'}
					<div class="content">
						<SvgGrabber />
					</div>
				{:else}
					<p>{description}</p>
				{/if}
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
		margin-block: 0;
	}
</style>
