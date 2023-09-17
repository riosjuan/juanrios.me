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
		outline: 0.125rem solid transparent;
		padding: 0;
		text-transform: capitalize;
		transition: opacity var(--hover-transition);
		transition: outline-color var(--hover-transition);
		width: 2.5rem;
	}

	button:hover,
	button:focus {
		outline: 0.125rem solid var(--accent-color);
	}
</style>
