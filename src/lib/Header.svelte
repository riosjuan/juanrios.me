<script>
	import { slideIn, removeClass } from '../utilities';
	import { onMount, afterUpdate } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	// Navigation links
	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Contact', url: '#contact' }
	];

	// Constants
	const NO_JS_CLASS = 'no-js';
	const SCALE_FACTOR = 0.00277; // 0.025 / 9
	const OPACITY_FACTOR = 1 / 18;
	const TRANSLATE_FACTOR = 1 / 9;

	// DOM elements
	let headerBackground;
	let nav;

	// Scroll position
	let scrollY;

	// Update header styles based on scroll position
	$: if (typeof scrollY !== 'undefined') {
		updateHeaderStyles(scrollY);
	}

	const updateHeaderStyles = (scroll) => {
		const scaleValue = Math.max(0.5, 1 - scroll * SCALE_FACTOR);
		const opacity = Math.min(scroll * OPACITY_FACTOR, 1);
		const translateY = -Math.min(scroll * TRANSLATE_FACTOR, 25);

		if (headerBackground) {
			headerBackground.style.transform = `scaleY(${scaleValue})`;
			headerBackground.style.opacity = opacity;
		}

		if (nav) {
			nav.style.transform = `translateY(${translateY}%)`;
		}
	};

	onMount(() => {
		removeClass(NO_JS_CLASS);
	});

	afterUpdate(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(
				'scroll',
				() => {
					scrollY = window.scrollY;
				},
				{ passive: true }
			);
		}
	});
</script>

<svelte:window bind:scrollY />

<header class={NO_JS_CLASS} style={slideIn(1)}>
	<div bind:this={headerBackground} class="header-background" aria-hidden="true"></div>
	<nav bind:this={nav} class="container">
		<ul>
			{#each links as link}
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
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.header-background {
		backdrop-filter: saturate(120%) blur(40px);
		background: transparent;
		display: block;
		width: 100%;
		height: 8rem;
		will-change: opacity, transform;
		position: absolute;
		inset: 0;
		opacity: 0;
		transform: scaleY(1);
		transform-origin: top;
		transition:
			transform 100ms ease-out,
			opacity 100ms ease-out;
		z-index: -1;
	}

	.no-js .header-background {
		opacity: 1 !important;
	}

	.header-background::after {
		backdrop-filter: saturate(180%);
		background-color: var(--text-color);
		content: '';
		display: block;
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.025;
	}

	nav {
		font-weight: 500;
		font-size: 1rem;
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		height: 8rem;
		transform-origin: top;
		transition: transform 0.1s ease-out;
		z-index: 1;
	}

	@media (prefers-reduced-motion: reduce) {
		.header-background {
			transform: scaleY(0.5) !important;
		}
		nav {
			transform: translateY(-25%) !important;
		}
	}

	.no-js .header-background {
		transform: scaleY(0.5) !important;
	}
	.no-js nav {
		transform: translateY(-25%) !important;
	}

	ul {
		column-gap: clamp(1.5rem, 3.5vw, 3rem);
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--spacing);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		font-weight: 550;
	}
</style>
