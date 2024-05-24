<script>
	import { slideIn, removeClass } from '../utilities';
	import { onMount } from 'svelte';
	import ThemeSelect from './ThemeSelect.svelte';

	let links = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Contact', url: '#contact' }
	];

	let y = 0;
	let opacity;
	let navHeight;

	const noJSClass = 'no-js';

	onMount(() => {
		removeClass(noJSClass);

		let ticking = false;

		const handleScroll = () => {
			y = window.scrollY;

			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateStyles(y);
					ticking = false;
				});

				ticking = true;
			}
		};

		const updateStyles = (scrollY) => {
			opacity = Math.min(scrollY / 64, 1).toFixed(1);
			navHeight = Math.max(8 - scrollY * 0.025, 4).toFixed(1);

			const nav = document.querySelector('nav');
			const headerBackground = document.querySelector('.header-background');

			if (nav) nav.style.height = `${navHeight}rem`;
			if (headerBackground) headerBackground.style.opacity = opacity;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class={noJSClass} style={slideIn(1)}>
	<nav style="height: 8rem;" class="container">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeSelect />
	</nav>
	<div class="header-background" style="opacity: 0;" aria-hidden="true" />
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
		inset: 0;
		opacity: 0;
		position: absolute;
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
		inset: auto 0 0;
		opacity: 0.025;
		position: absolute;
	}

	nav {
		font-weight: 500;
		grid-column: 1/7;
		font-size: 1rem;
		display: flex;
		align-items: center;
	}

	@media (prefers-reduced-motion: reduce) {
		nav {
			height: 4rem !important;
		}
	}

	.no-js nav {
		height: 4rem !important;
	}

	ul {
		column-gap: clamp(1.5rem, 3.5vw, 3rem);
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--spacing);
	}

	a {
		text-decoration: none;
		font-weight: 550;
	}
</style>
