<script>
	import { onMount } from 'svelte';
	import { removeNoJSClass } from '../utilities';
	import IconThemeToggle from './IconThemeToggle.svelte';

	const storageKey = 'theme-preference';
	const THEME = { DARK: 'dark', LIGHT: 'light' };

	let theme;

	// Function to get the color preference
	const getColorPreference = () => {
		return localStorage.getItem(storageKey);
	};

	// Function to set the theme and update the preferences
	const themeToggleHandler = () => {
		theme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem(storageKey, theme);
	};

	// Set the initial theme on component mount
	onMount(() => {
		removeNoJSClass();
		theme = getColorPreference();
	});
</script>

<div class="no-js">
	<button on:click={themeToggleHandler} title="Toggles light & dark" aria-label={theme}>
		<!-- {theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT} -->
		<IconThemeToggle />
	</button>
</div>

<style>
	.no-js {
		display: none;
	}

	div {
		margin-inline-start: auto;
	}

	button {
		appearance: none;
		background: transparent;
		border: 0;
		border-radius: 100%;
		color: var(--text-color);
		cursor: pointer;
		font-size: 1rem;
		padding: 0;
		text-transform: capitalize;
		transition: opacity var(--hover-transition);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		width: 2.5rem;
		outline: 0.125rem solid transparent;
		transition: outline-color var(--hover-transition);
	}

	button:hover,
	button:focus {
		outline: 0.125rem solid var(--accent-color);
	}
</style>
