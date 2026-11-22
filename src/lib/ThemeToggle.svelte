<script>
	import { onMount } from 'svelte';
	import { applyThemeHue, randomHue, removeClass } from '../utilities';
	import IconThemeToggle from './IconThemeToggle.svelte';

	const storageKey = 'theme-preference';
	const THEME = { DARK: 'dark', LIGHT: 'light' };

	let userTheme = $state();

	// Storage can throw when blocked (private mode, disabled site data); theming still works without it.
	const readStoredTheme = () => {
		try {
			return localStorage.getItem(storageKey);
		} catch {
			return null;
		}
	};

	const storeTheme = (theme) => {
		try {
			localStorage.setItem(storageKey, theme);
		} catch {
			// Ignore: the preference just won't persist across visits.
		}
	};

	$effect(() => {
		if (userTheme) {
			document.documentElement.setAttribute('data-theme', userTheme);
			storeTheme(userTheme);
		}
	});

	const themeToggleHandler = () => {
		userTheme = userTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		applyThemeHue(userTheme, randomHue());
	};

	onMount(() => {
		removeClass('js-disabled');
		userTheme =
			readStoredTheme() ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);

		applyThemeHue(userTheme, randomHue());
	});
</script>

<button
	class="js-disabled"
	onclick={themeToggleHandler}
	aria-label="Dark theme"
	aria-pressed={userTheme === THEME.DARK}
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
