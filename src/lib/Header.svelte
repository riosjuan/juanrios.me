<script>
	/* global ScrollTimeline */
	import { onMount } from 'svelte';
	import { isFirefox, isSafari, loadScrollTimelinePolyfillIfNeeded } from '../utilities';
	import ThemeToggle from './ThemeToggle.svelte';

	const navigationLinks = [
		{ name: 'Juan Rios', url: '/', brand: true },
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

	const applySafariBackdropFallback = () => {
		const headerElement = document.querySelector('header');

		if (!headerElement) {
			return () => {};
		}

		const styles = getComputedStyle(headerElement);
		const saturationStart =
			Number(styles.getPropertyValue('--filter-saturation-start').trim()) || 1;
		const saturationEnd = Number(styles.getPropertyValue('--filter-saturation-end').trim()) || 1.2;
		const blurStart =
			Number(styles.getPropertyValue('--filter-blur-start').replace('rem', '').trim()) || 0;
		const blurEnd =
			Number(styles.getPropertyValue('--filter-blur-end').replace('rem', '').trim()) || 1.5;

		headerElement.classList.add('safari-blur-fallback');

		const update = () => {
			const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
			const progressRange = Math.max(maxScroll * 0.3, 1);
			const progress = Math.min(window.scrollY / progressRange, 1);
			const currentSaturation = saturationStart + (saturationEnd - saturationStart) * progress;
			const currentBlur = blurStart + (blurEnd - blurStart) * progress;

			headerElement.style.setProperty('--filter-saturation-current', `${currentSaturation}`);
			headerElement.style.setProperty('--filter-blur-current', `${currentBlur}rem`);
		};

		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		update();

		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
			headerElement.classList.remove('safari-blur-fallback');
			headerElement.style.removeProperty('--filter-saturation-current');
			headerElement.style.removeProperty('--filter-blur-current');
		};
	};

	onMount(async () => {
		await loadScrollTimelinePolyfillIfNeeded();

		if (isSafari) {
			return applySafariBackdropFallback();
		}

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
					<a class:brand={link.brand} href={link.url}>{link.name}</a>
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
		--filter-blur-current: var(--filter-blur-end);
		--filter-saturation-end: 1.2;
		--filter-saturation-start: 1;
		--filter-saturation-current: var(--filter-saturation-end);
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

	:global(header.safari-blur-fallback) {
		-webkit-backdrop-filter: saturate(var(--filter-saturation-current))
			blur(var(--filter-blur-current));
		backdrop-filter: saturate(var(--filter-saturation-current)) blur(var(--filter-blur-current));
		animation-name: header-size-only;
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
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.brand {
		color: var(--text-strong);
		font-weight: var(--font-weight-medium);
		letter-spacing: calc(var(--letter-spacing) * 3);

		&:hover {
			color: var(--text-primary);
			text-decoration: none;
		}
	}
</style>
