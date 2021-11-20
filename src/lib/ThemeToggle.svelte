<script>
	import { onMount } from 'svelte';
	import { capitalize, removeNoJSClass } from '../utilities';
	import tinycolor from 'tinycolor2';
	import Modal from '$lib/Modal.svelte';
	import SegmentedControl from '$lib/SegmentedControl.svelte';

	const STORAGE_KEY = 'user-preferences';
	const DEFAULT_COLOR_SCHEME = 'auto';
	const COLOR_SCHEMES = ['light', 'dark', DEFAULT_COLOR_SCHEME];
	const DEFAULT_COLOR_THEME = 'default';
	const COLOR_THEMES = [DEFAULT_COLOR_THEME, 'berenjena', 'cupcake', 'deep-blue', 'terminal'];

	const dataColorTheme = 'data-theme';
	const dataColorScheme = 'data-color-scheme';

	let colorScheme = DEFAULT_COLOR_SCHEME;
	let colorTheme = DEFAULT_COLOR_THEME;
	let userPreferences = { colorScheme, colorTheme };
	let metaThemeColor;
	let showModal = false;

	const saveUserPreferences = () => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(userPreferences));
	};

	const updateColorScheme = (newColorScheme) => {
		colorScheme = newColorScheme;
		document.documentElement.setAttribute(dataColorScheme, colorScheme);
	};

	const updateColorTheme = (newColorTheme) => {
		colorTheme = newColorTheme;
		document.documentElement.setAttribute(dataColorTheme, colorTheme);
	};

	const setUserPreferencesOnLoad = () => {
		const savedUserPreferences = localStorage.getItem(STORAGE_KEY);

		if (savedUserPreferences) {
			userPreferences = JSON.parse(savedUserPreferences);
			updateColorScheme(userPreferences.colorScheme);
			updateColorTheme(userPreferences.colorTheme);
		}
	};

	const getThemeBackgroundColor = () => {
		const body = document.querySelector('body');
		let themeBackgroundColor = window.getComputedStyle(body).getPropertyValue('--bg-0');
		themeBackgroundColor = tinycolor(themeBackgroundColor).toHexString();

		return themeBackgroundColor;
	};

	const setMetaThemeColor = (color) => {
		color = getThemeBackgroundColor();
	};

	const handleColorSchemeChange = () => {
		userPreferences.colorScheme = colorScheme;

		if (colorScheme === DEFAULT_COLOR_SCHEME) {
			document.documentElement.removeAttribute(dataColorScheme);
		} else {
			updateColorScheme(colorScheme);
		}

		setMetaThemeColor(metaThemeColor);
		saveUserPreferences();
		showModal = false;
	};

	const handleColorThemeChange = (event) => {
		colorTheme = event.target.value;
		userPreferences.colorTheme = colorTheme;
		updateColorTheme(colorTheme);

		setMetaThemeColor(metaThemeColor);
		saveUserPreferences();
		showModal = false;
	};

	onMount(() => {
		setUserPreferencesOnLoad();
		removeNoJSClass();
	});
</script>

<svelte:head>
	<meta name="theme-color" content={metaThemeColor} />
</svelte:head>

<div class="theme-selector no-js">
	<p>Theme</p>
	<div class="select-wrapper">
		<button on:click={() => (showModal = true)}>{userPreferences.colorTheme}</button>
		{#if showModal}
			<Modal on:close={() => (showModal = false)}>
				<SegmentedControl
					options={COLOR_SCHEMES}
					bind:data={colorScheme}
					name="color-modes"
					on:change={handleColorSchemeChange}
				/>
				<ul>
					{#each COLOR_THEMES as theme}
						<li>
							<button
								on:click={handleColorThemeChange}
								value={theme}
								class="button-theme {userPreferences.colorTheme === theme ? 'selected' : ''}"
							>
								{capitalize(theme)}
							</button>
						</li>
					{/each}
				</ul>
			</Modal>
		{/if}
	</div>
</div>

<style>
	.theme-selector {
		align-items: center;
		column-gap: var(--spacing-half);
		display: flex;
	}

	.no-js {
		display: none;
	}

	p {
		color: var(--text-secondary);
		display: none;
		font-size: inherit;
	}

	@media screen and (min-width: 36em) {
		p {
			display: block;
		}
	}

	.select-wrapper {
		position: relative;
		align-items: center;
		column-gap: var(--spacing-quarter);
		display: flex;
	}

	.select-wrapper::before {
		animation: blinking 750ms ease-in-out 1250ms 4 backwards;
		content: '\276F';
		margin-right: var(--spacing-quarter);
	}

	button {
		appearance: none;
		background-color: transparent;
		border-radius: var(--border-radius);
		border: 1px solid transparent;
		color: var(--accent-color);
		cursor: pointer;
		font-family: inherit;
		font-size: inherit;
		font-weight: 500;
		margin: 0 calc(var(--spacing-quarter) * -1);
		padding: calc(var(--spacing) / 6) var(--spacing-quarter);
		text-transform: capitalize;
		transition: color 200ms ease-in-out, background-color 150ms ease-in-out;
	}

	button:hover {
		border: 1px solid var(--accent-color);
		color: var(--accent-color);
	}

	li {
		border-top: 1px solid var(--divider);
	}

	.button-theme {
		align-items: center;
		background-color: transparent;
		border-radius: 0;
		border: none;
		column-gap: var(--spacing-quarter);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-weight: 500;
		margin: 0;
		padding: calc(var(--spacing) * 0.75) var(--spacing2x);
		position: relative;
		transition: background-color 200ms ease-in-out;
		width: 100%;
	}

	.button-theme:hover {
		border: none;
		background-color: var(--bg-x);
	}

	.selected::before {
		content: '\2713';
		position: absolute;
		left: calc(var(--spacing) / 3);
		width: calc(var(--spacing) * 1.5);
	}

	button:focus {
		border-radius: var(--border-radius);
		outline-offset: var(--spacing-quarter);
		outline: 1px dotted var(--text-primary);
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
