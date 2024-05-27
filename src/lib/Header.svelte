<script>
	import { slideIn, removeClass } from '../utilities';
	import { onMount } from 'svelte';
	import ThemeSelect from './ThemeSelect.svelte';

	let links = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Contact', url: '#contact' }
	];

	const noJSClass = 'no-js';
	let headerBackground;
	let nav;

	onMount(() => {
		removeClass(noJSClass);

		const handleScroll = () => {
			const scrollY = window.scrollY / 9;
			const scaleValue = Math.max(0.5, 1 - scrollY * 0.025);
			const opacity = Math.min(scrollY / 2, 1);
			const translateY = 0 - Math.min(scrollY, 25);

			if (headerBackground) {
				headerBackground.style.transform = `scaleY(${scaleValue})`;
				headerBackground.style.opacity = opacity;
			}

			if (nav) {
				nav.style.transform = `translateY(${translateY}%)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class={noJSClass} style={slideIn(1)}>
	<div bind:this={headerBackground} class="header-background" aria-hidden="true"></div>
	<nav bind:this={nav} class="container" style="transform: translateY(0);">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeSelect />
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
