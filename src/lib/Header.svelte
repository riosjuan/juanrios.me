<script>
	import { slideIn } from '../utilities';
	import { onMount } from 'svelte';
	import { removeNoJSClass } from '../utilities';
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
		if (y >= 0) {
			opacity = Math.min(y / 64, 1);
			navHeight = Math.max(8 - y * 0.025, 4);
		}
	}

	onMount(() => {
		removeNoJSClass();
	});
</script>

<svelte:window bind:scrollY={y} />

<header style={slideIn(1)}>
	<nav style={`height: ${navHeight}rem`}>
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
		<ThemeSelect />
	</nav>
	<div class="header-background no-js" style={`opacity: ${opacity}`} aria-hidden="true" />
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.header-background {
		background: var(--bg-color);
		filter: opacity(0.95);
		display: block;
		inset: 0;
		opacity: 0;
		position: absolute;
		z-index: -1;
	}

	.header-background::after {
		background-color: var(--text-color);
		content: '';
		display: block;
		height: 1px;
		inset: auto 0 0;
		opacity: 0.025;
		position: absolute;
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.header-background {
			backdrop-filter: saturate(120%) blur(40px);
			background: transparent;
			filter: none;
		}

		.header-background::after {
			backdrop-filter: saturate(180%);
		}
	}

	.no-js {
		opacity: 1 !important;
	}

	nav {
		font-weight: 500;
		grid-column: 1/7;
		font-size: 1rem;
		display: flex;
		align-items: center;
		max-width: 72rem;
		padding-inline: 1.5rem;
		margin-inline: auto;
	}

	div {
		width: 100%;
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
