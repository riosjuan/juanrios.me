<script>
	import { slideIn } from '../utilities';
	import { onMount } from 'svelte';
	import { removeNoJSClass } from '../utilities';
	import ThemeToggle from '$lib/ThemeToggle.svelte';

	let links = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Contact', url: '#contact' }
	];

	let y = 0;

	$: opacity = () => {
		const currentOpacity = y / 64;

		if (currentOpacity >= 1) {
			return 1;
		} else {
			return currentOpacity;
		}
	};

	onMount(() => {
		removeNoJSClass();
	});
</script>

<svelte:window bind:scrollY={y} />

<header role="banner" style={slideIn(1)}>
	<nav>
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<ThemeToggle />
	<div class="header-background no-js" style={`opacity: ${opacity()}`} aria-hidden="true" />
</header>

<style>
	header {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		min-height: var(--spacing4x);
		padding: var(--spacing) clamp(var(--spacing), 5vw, var(--spacing2x));
		position: sticky;
		row-gap: var(--spacing2x);
		top: 0;
		z-index: 10;
	}

	.header-background {
		background: var(--bg-main);
		filter: opacity(0.95);
		display: block;
		inset: 0;
		opacity: 0;
		position: absolute;
		z-index: -1;
	}

	.header-background::after {
		background-color: var(--text-primary);
		bottom: 0;
		content: '';
		display: block;
		height: 1px;
		left: 0;
		opacity: 0.1;
		position: absolute;
		right: 0;
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.header-background {
			backdrop-filter: saturate(180%) blur(20px);
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
	}

	ul {
		column-gap: clamp(var(--spacing), 5vw, var(--spacing2x));
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
		row-gap: var(--spacing);
	}
</style>
