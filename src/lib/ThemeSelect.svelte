<script>
	import { onMount } from 'svelte';
	import { removeClass } from '../utilities';
	import IconThemeToggle from './IconThemeToggle.svelte';

	const storageKey = 'theme-preference';
	const THEME = { DARK: 'dark', LIGHT: 'light' };

	let userTheme;

	// Memoized function to get the color preference
	const getColorPreference = () => {
		if (!userTheme) {
			userTheme = localStorage.getItem(storageKey);
		}
		return userTheme;
	};

	// Function to set the theme and update the preferences
	const themeToggleHandler = () => {
		const newTheme =
			document.documentElement.getAttribute('data-theme') === THEME.LIGHT
				? THEME.DARK
				: THEME.LIGHT;

		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem(storageKey, newTheme);
		userTheme = newTheme;
	};

	const noJSClass = 'no-js';

	// Set the initial theme on component mount
	onMount(() => {
		removeClass(noJSClass);
		userTheme = getColorPreference();
		if (userTheme) {
			document.documentElement.setAttribute('data-theme', userTheme);
		}
	});
</script>

<button
	class={noJSClass}
	on:click={themeToggleHandler}
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
		color: var(--text-color);
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
		transition: opacity var(--hover-transition);
		transition: outline-color var(--hover-transition);
		width: 2.5rem;

		&:is(:hover, :focus) {
			outline: 0.125rem solid var(--accent-color);
		}
	}
</style>
