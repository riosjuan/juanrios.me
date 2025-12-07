<script>
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	import { removeClass } from '../utilities';
	import IconThemeToggle from './IconThemeToggle.svelte';

	const storageKey = 'theme-preference';
	const THEME = { DARK: 'dark', LIGHT: 'light' };

	let userTheme = $state();

	run(() => {
		if (userTheme) {
			document.documentElement.setAttribute('data-theme', userTheme);
			localStorage.setItem(storageKey, userTheme);
		}
	});

	const themeToggleHandler = () => {
		userTheme = userTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
	};

	onMount(() => {
		removeClass('no-js');
		userTheme =
			localStorage.getItem(storageKey) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);
	});
</script>

<button
	class="no-js"
	onclick={themeToggleHandler}
	title="Toggles light & dark"
	aria-label={userTheme}
>
	<IconThemeToggle />
</button>

<style>
	.no-js {
		display: none;
	}

	button {
		--button-size: 2.5rem;

		align-items: center;
		appearance: none;
		background: transparent;
		block-size: var(--button-size);
		border-radius: 100%;
		border: 0;
		color: var(--text-primary);
		cursor: pointer;
		display: flex;
		font-size: var(--font-size-fixed);
		inline-size: var(--button-size);
		justify-content: center;
		margin-inline-start: auto;
		outline-offset: -0.5rem;
		padding: 0;

		@media (any-hover: hover) {
			&:hover {
				filter: brightness(0.7);
			}
		}
	}
</style>
