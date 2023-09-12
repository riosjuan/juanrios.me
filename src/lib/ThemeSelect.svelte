<script>
	import { onMount } from 'svelte';

	const storageKey = 'theme-preference';

	let themes = ['light', 'dark'];
	let theme;

	// Function to get the color preference
	const getColorPreference = () => {
		return (
			localStorage.getItem(storageKey) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
		);
	};

	// Function to set the theme and update the preferences
	const setTheme = (newTheme) => {
		theme = newTheme;
		document.firstElementChild.setAttribute('data-theme', theme);
		localStorage.setItem(storageKey, theme);
	};

	// Function to handle theme changes
	const handleThemeChange = () => {
		setTheme(theme);
	};

	// Set the initial theme on component mount
	onMount(() => {
		setTheme(getColorPreference());

		// Listen for changes in preferred color scheme
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: isDark }) => {
				setTheme(isDark ? 'dark' : 'light');
			});
	});
</script>

<select name="" id="" bind:value={theme} on:change={handleThemeChange}>
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
	}

	select:focus {
		outline: 1px solid var(--accent-color);
		outline-offset: 0.125rem;
	}
</style>
