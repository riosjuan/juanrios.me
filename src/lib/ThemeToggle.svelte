<script>
	import { onMount } from 'svelte';
	import { capitalize, removeNoJSClass } from '../utilities';

	const STORAGE_KEY = 'user-color-scheme';
	const colorThemes = ['system', 'cupcake', 'dark', 'deep-blue', 'light', 'terminal'];
	const dataColorScheme = 'data-user-color-scheme';
	let userTheme;

	const setUserTheme = (theme) => {
		document.documentElement.setAttribute(dataColorScheme, theme);
	};

	const setTheme = () => {
		userTheme = localStorage.getItem(STORAGE_KEY);
		if (!userTheme) {
			userTheme = 'system';
		} else {
			userTheme;
			setUserTheme(userTheme);
		}
	};

	const selectTheme = () => {
		let currentTheme = localStorage.getItem(STORAGE_KEY);
		currentTheme = userTheme;
		setUserTheme(currentTheme);
		localStorage.setItem(STORAGE_KEY, currentTheme);
		return currentTheme;
	};

	onMount(() => {
		setTheme();
		removeNoJSClass();
	});
</script>

<div class="theme-selector no-js">
	<label for="theme-select">Theme</label>
	<div class="select-wrapper">
		<select bind:value={userTheme} on:change={selectTheme} id="theme-select">
			{#each colorThemes as theme}
				<option value={theme} userTheme={userTheme === theme}>{capitalize(theme)} </option>
			{/each}
		</select>
	</div>
</div>

<style>
	.theme-selector {
		align-items: center;
		column-gap: calc(var(--spacing) / 2);
		display: flex;
	}

	.no-js {
		display: none;
	}

	label {
		clip-path: inset(1px);
		color: var(--text-secondary);
		display: block;
		height: 1px;
		overflow: hidden;
		white-space: nowrap;
		width: 1px;
	}

	@media screen and (min-width: 36em) {
		label {
			clip-path: initial;
			height: initial;
			overflow: visible;
			white-space: initial;
			width: initial;
		}
	}

	.select-wrapper {
		align-items: center;
		column-gap: var(--spacing-quarter);
		display: flex;
	}

	.select-wrapper::before {
		animation: blinking 750ms ease-in-out 1250ms 4 backwards;
		content: '\276F';
	}

	select {
		appearance: none;
		background: transparent;
		border-radius: var(--border-radius);
		border: 0;
		color: var(--text-secondary);
		cursor: pointer;
		font-family: inherit;
		font-size: inherit;
		margin: 0;
		padding: 0 var(--spacing-quarter);
	}

	select:focus {
		outline: 1px dotted var(--text-primary);
		outline-offset: var(--spacing-quarter);
		border-radius: var(--border-radius);
	}

	@keyframes blinking {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
