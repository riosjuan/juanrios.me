<script>
	import Tags from './Tags.svelte';

	let { projects } = $props();
</script>

<ul>
	{#each projects as { name, url, tags, content }, index (name)}
		<li>
			<article>
				<h3>
					<a href={url} aria-label={`View project ${name}`}>{name}</a>
				</h3>
				<div class="content">{@html content}</div>
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

	.content {
		& p {
			margin-block: 0;
		}

		& p:has(a) {
			margin-block-start: 1rem;
		}

		& a {
			font-size: clamp(1rem, 3.5vw, 1.5rem);
			text-decoration: none;
			font-weight: 350;
		}

		& .link-divider {
			font-size: 1rem;
			opacity: 0.5;
		}
	}
</style>
