<script>
	import ThemeToggle from './ThemeToggle.svelte';

	const navigationLinks = [
		{ name: 'Juan Rios', url: '/', brand: true },
		{ name: 'Work', url: '#work' },
		{ name: 'Contact', url: '#contact' }
	];
</script>

<header>
	<a class="skip-link" href="#content">Skip to content</a>
	<div class="divider" aria-hidden="true"></div>
	<nav class="container">
		<ul>
			{#each navigationLinks as link (link.url)}
				<li>
					<a class:brand={link.brand} href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeToggle />
	</nav>
</header>

<style>
	header {
		--divider-size: 2px;
		--header-size: 4rem;
		--header-size-end: var(--header-size);
		--header-size-start: calc(var(--header-size) * 2);
		/* Shrink over exactly the distance lost so the header tracks the content. */
		--shrink-distance: calc(var(--header-size-start) - var(--header-size-end));

		align-content: center;
		block-size: var(--header-size-end);
		inline-size: 100%;
		position: fixed;
		top: 0;
		z-index: 1;

		/* Fade a fixed blur layer instead of animating backdrop-filter itself. */
		&::before {
			-webkit-backdrop-filter: saturate(1.2) blur(1.5rem);
			backdrop-filter: saturate(1.2) blur(1.5rem);
			content: '';
			inset: 0;
			position: absolute;
		}
	}

	/* Visually hidden until keyboard focus reveals it above the header. */
	.skip-link {
		background-color: var(--background-primary);
		color: var(--accent);
		font-size: var(--font-size-small);
		inset-block-start: 0;
		inset-inline-start: var(--inline-spacing);
		padding: calc(var(--block-spacing) / 2) var(--inline-spacing);
		position: absolute;
		transform: translateY(-200%);
		z-index: 2;

		&:focus-visible {
			transform: none;
		}
	}

	.divider {
		background-color: var(--text-primary);
		bottom: 0;
		block-size: var(--divider-size);
		left: 0;
		opacity: 0.05;
		position: absolute;
		right: 0;
	}

	/* Decorative: unsupported browsers and reduced motion keep the collapsed state. */
	@media (prefers-reduced-motion: no-preference) {
		@supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
			header {
				animation: header-shrink auto linear both;
				animation-timeline: scroll(block root);
				animation-range: 0px var(--shrink-distance);
			}

			header::before,
			.divider {
				animation: fade-in auto linear both;
				animation-timeline: scroll(block root);
				animation-range: 0px var(--shrink-distance);
			}
		}
	}

	nav {
		align-items: center;
		block-size: var(--header-size-end);
		column-gap: calc(var(--inline-spacing) * 2);
		display: flex;
		font-size: var(--font-size-small);
		inline-size: 100%;
		justify-content: space-between;
		position: relative;
		z-index: 1;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0 calc(var(--inline-spacing) * 2);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a {
		color: var(--accent);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.brand {
		color: var(--text-strong);
		font-weight: var(--font-weight-medium);
		letter-spacing: calc(var(--letter-spacing) * 3);

		&:hover {
			color: var(--text-primary);
			text-decoration: none;
		}
	}
</style>
