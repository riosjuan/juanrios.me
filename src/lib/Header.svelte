<script>
	import { slideIn } from '../utilities';
	import { onMount } from 'svelte';
	import { removeNoJSClass } from '../utilities';

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

<header style={slideIn(1)}>
	<div>
		<nav>
			<ul>
				{#each links as link}
					<li>
						<a href={link.url}>{link.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
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
		bottom: 0;
		content: '';
		display: block;
		height: 1px;
		left: 0;
		opacity: 0.025;
		position: absolute;
		right: 0;
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.header-background {
			backdrop-filter: saturate(120%) blur(20px);
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
		height: 7.5rem;
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
		column-gap: 3rem;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
		row-gap: var(--spacing);
	}

	a {
		color: hsla(150, 95%, 50%, 1);
		text-decoration: none;
	}

	a:hover {
		color: var(--text-color);
	}
</style>
