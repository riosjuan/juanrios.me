<script>
	import { onMount } from 'svelte';
	import { applyThemeHue, randomHue, removeClass } from '../utilities';
	import IconThemeToggle from './IconThemeToggle.svelte';

	const storageKey = 'theme-preference';
	const THEME = { DARK: 'dark', LIGHT: 'light' };

	let userTheme = $state();

	$effect(() => {
		if (userTheme) {
			document.documentElement.setAttribute('data-theme', userTheme);
			localStorage.setItem(storageKey, userTheme);
		}
	});

	const themeToggleHandler = () => {
		userTheme = userTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		applyThemeHue(userTheme, randomHue());
	};

	onMount(() => {
		removeClass('js-disabled');
		userTheme =
			localStorage.getItem(storageKey) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);

		applyThemeHue(userTheme, randomHue());
	});
</script>

<button
	class="js-disabled"
	onclick={themeToggleHandler}
	aria-label={userTheme === THEME.DARK ? 'Switch to light theme' : 'Switch to dark theme'}
>
	<IconThemeToggle />
</button>

<style>
	button {
		--button-size: 2.5rem;

		align-items: center;
		appearance: none;
		background: transparent;
		block-size: var(--button-size);
		border-radius: 100%;
		border: 0;
		color: var(--accent);
		cursor: pointer;
		display: flex;
		inline-size: var(--button-size);
		justify-content: center;
		outline-offset: -0.5rem;
		padding: 0;

		@media (any-hover: hover) {
			&:hover {
				color: var(--text-strong);
			}
		}
	}

	.js-disabled {
		display: none;
	}
</style>
