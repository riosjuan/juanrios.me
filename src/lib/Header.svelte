<script>
	/* global ScrollTimeline */
	import { onMount } from 'svelte';
	import { isFirefox, loadScrollTimelinePolyfillIfNeeded } from '../utilities';
	import ThemeToggle from './ThemeToggle.svelte';

	const navigationLinks = [
		{ name: 'Juan Rios', url: '/' },
		{ name: 'Work', url: '#work' },
		{ name: 'Contact', url: '#contact' }
	];

	const applyScrollAnimation = () => {
		const headerElement = document.querySelector('header');
		const headerDivider = document.querySelector('.divider');

		headerElement.animate(
			{
				height: ['var(--header-size-start)', 'var(--header-size-end)']
			},
			{
				fill: 'both',
				easing: 'linear',
				timeline: new ScrollTimeline({
					source: document.documentElement,
					axis: 'block'
				})
			}
		);

		headerDivider.animate(
			{
				opacity: ['var(--divider-opacity-start)', 'var(--divider-opacity-end)']
			},
			{
				fill: 'both',
				easing: 'linear',
				timeline: new ScrollTimeline({
					source: document.documentElement,
					axis: 'block'
				})
			}
		);
	};

	onMount(async () => {
		await loadScrollTimelinePolyfillIfNeeded();
		if (isFirefox) {
			applyScrollAnimation();
		}
	});
</script>

<header>
	<div class="divider" aria-hidden="true"></div>
	<nav class="container">
		<ul>
			{#each navigationLinks as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeToggle />
	</nav>
</header>

<style>
	header {
		--animation-parameters: cubic-bezier(0, 1.1, 1, 1) forwards;
		--animation-range: normal 30%;
		--divider-opacity-end: 0.05;
		--divider-opacity-start: 0;
		--divider-size: 2px;
		--filter-blur-end: 1.5rem;
		--filter-blur-start: 0;
		--filter-saturation-end: 1.2;
		--filter-saturation-start: 1;
		--header-size: 4rem;
		--header-size-end: calc(var(--header-size));
		--header-size-start: calc(var(--header-size) * 2);

		align-content: center;
		animation: header-size-and-opacity var(--animation-parameters);
		animation-range: var(--animation-range);
		animation-timeline: scroll(block);
		backdrop-filter: saturate(var(--filter-saturation-end)) blur(var(--filter-blur-end));
		inline-size: 100%;
		position: fixed;
		top: 0;
		will-change: height;
		z-index: 1;
	}

	.divider {
		animation: divider-opacity var(--animation-parameters);
		animation-range: var(--animation-range);
		animation-timeline: scroll(block);
		backdrop-filter: saturate(2) blur(3rem);
		background-color: var(--text-primary);
		bottom: 0;
		block-size: var(--divider-size);
		left: 0;
		opacity: var(--divider-opacity-end);
		position: absolute;
		right: 0;
		will-change: opacity;
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
		font-weight: var(--font-weight-medium);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
