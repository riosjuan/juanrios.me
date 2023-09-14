<script>
	import { onMount } from 'svelte';

	const storageKey = 'theme-preference';

	let themes = ['light', 'dark'];
	let theme;

	// Function to get the color preference
	const getColorPreference = () => {
		return localStorage.getItem(storageKey);
	};

	// Function to set the theme and update the preferences
	const setTheme = (newTheme) => {
		theme = newTheme;
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem(storageKey, theme);
	};

	// Set the initial theme on component mount
	onMount(() => {
		theme = getColorPreference();
	});
</script>

<select name="" id="" bind:value={theme} on:change={setTheme(theme)}>
	{#each themes as theme}
		<option value={theme}>{theme}</option>
	{/each}
</select>

<style>
	select {
		appearance: none;
		background: transparent;
		border-radius: 0.25rem;
		border: 1px solid var(--text-color);
		color: var(--text-color);
		cursor: pointer;
		font-size: 1rem;
		font-weight: 500;
		margin-inline-start: auto;
		padding: 0 0.5rem;
		text-transform: capitalize;
		opacity: 0.6;
		transition: opacity var(--hover-transition);
	}

	select:hover {
		opacity: 1;
	}

	select:focus {
		outline: 1px solid var(--accent-color);
		outline-offset: 0.125rem;
	}
</style>
