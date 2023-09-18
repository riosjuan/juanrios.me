<script>
	import { slideIn, removeNoJSClass } from '../utilities';
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

	$: {
		if (y >= 0 || y > 200) {
			opacity = Math.min(y / 64, 1).toFixed(1);
			navHeight = Math.max(8 - y * 0.025, 4).toFixed(1);
		}
	}

	onMount(() => {
		removeNoJSClass();
	});
</script>

<svelte:window bind:scrollY={y} />

<header class="no-js" style={slideIn(1)}>
	<nav style={`height: ${navHeight}rem`} class="container">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeSelect />
	</nav>
	<div class="header-background" style={`opacity: ${opacity}`} aria-hidden="true" />
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
