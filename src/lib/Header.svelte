<script>
	import { onMount } from 'svelte';
	import { isSafariOrFirefox, loadScrollTimelinePolyfillIfNeeded } from '../utilities';
	import ThemeToggle from './ThemeToggle.svelte';

	const navigationLinks = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
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
					source: document.documentElement
				}),
				rangeStart: '0px',
				rangeEnd: '256px'
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
					source: document.documentElement
				}),
				rangeStart: '0px',
				rangeEnd: '256px'
			}
		);
	};

	onMount(async () => {
		await loadScrollTimelinePolyfillIfNeeded();
		if (isSafariOrFirefox) {
			applyScrollAnimation();
		}
	});
</script>

<header>
	<div class="divider" aria-hidden="true" />
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
		--animation-range: 0px 256px;
		--animation-timeline: scroll();
		--animation-parameters: cubic-bezier(0, 1.1, 1, 1) forwards;
		--header-size-start: 8rem;
		--header-size-end: 4rem;
		--divider-opacity-start: 0;
		--divider-opacity-end: 0.025;

		align-items: center;
		animation: header-size-and-opacity var(--animation-parameters);
		animation-range: var(--animation-range);
		animation-timeline: var(--animation-timeline);
		backdrop-filter: saturate(1) blur(2rem);
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		will-change: height;
		z-index: 10;
	}

	.divider {
		animation: divider-opacity var(--animation-parameters);
		animation-range: var(--animation-range);
		animation-timeline: var(--animation-timeline);
		backdrop-filter: saturate(2) blur(3rem);
		background-color: var(--text-color);
		bottom: 0;
		height: 2px;
		left: 0;
		opacity: var(--divider-opacity-end);
		position: absolute;
		right: 0;
		will-change: opacity;
	}

	nav {
		align-items: center;
		animation: slide-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 200ms 1 backwards;
		display: flex;
		font-size: 1rem;
		font-weight: 500;
		height: var(--header-size-end);
		position: relative;
		width: 100%;
		z-index: 1;
	}

	ul {
		column-gap: clamp(1.5rem, 3.5vw, 3rem);
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
		row-gap: var(--spacing);
	}

	a {
		font-weight: 550;
		text-decoration: none;
	}

	@media (prefers-reduced-motion: no-preference) {
		@keyframes header-size-and-opacity {
			from {
				height: var(--header-size-start);
			}
			to {
				height: var(--header-size-end);
			}
		}

		@keyframes divider-opacity {
			from {
				opacity: var(--divider-opacity-start);
			}
			to {
				opacity: var(--divider-opacity-end);
			}
		}
	}
</style>
