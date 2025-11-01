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
		align-items: center;
		appearance: none;
		background: transparent;
		border-radius: 100%;
		border: 0;
		color: light-dark(var(--text-color-light), var(--text-color-dark));
		cursor: pointer;
		display: flex;
		font-size: 1rem;
		height: 2.5rem;
		justify-content: center;
		margin-inline-start: auto;
		outline-offset: -0.5rem;
		outline: 0.125rem solid transparent;
		padding: 0;
		text-transform: capitalize;
		transition:
			opacity var(--hover-transition),
			outline-color var(--hover-transition),
			background-color 0.3s ease;
		width: 2.5rem;

		&:is(:hover, :focus) {
			outline: 0.125rem solid light-dark(var(--accent-color-light), var(--accent-color-dark));
		}
	}
</style>
