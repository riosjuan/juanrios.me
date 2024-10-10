<script>
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	// Navigation links
	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Contact', url: '#contact' }
	];

	let header;

	onMount(async () => {
		await import('https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js');

		header = document.querySelector('header');

		header.style.position = 'fixed';
		header.style.top = 0;

		header.animate(
			{
				backgroundColor: ['var(--bg-color)', 'transparent'],
				height: ['8rem', '4rem']
			},
			{
				fill: 'both',
				timeline: new ScrollTimeline({
					source: document.documentElement
				}),
				rangeStart: new CSSUnitValue(0, 'px'),
				rangeEnd: new CSSUnitValue(256, 'px')
			}
		);
	});
</script>

<header bind:this={header}>
	<nav class="container">
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
		align-items: center;
		animation: header-size-and-opacity cubic-bezier(0.5, 0, 0.75, 0) forwards;
		animation-timeline: scroll();
		animation-range: 0rem 16rem;
		backdrop-filter: saturate(120%) blur(40px);
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;

		&::after {
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
	}

	nav {
		align-items: center;
		animation: slide-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 200ms 1 backwards;
		display: flex;
		font-size: 1rem;
		font-weight: 500;
		position: relative;
		width: 100%;
		z-index: 1;
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

	@media (prefers-reduced-motion: no-preference) {
		@keyframes header-size-and-opacity {
			from {
				background-color: var(--bg-color);
				height: 8rem;
			}
			to {
				background-color: transparent;
				height: 4rem;
			}
		}
	}
</style>
