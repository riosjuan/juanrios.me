<script>
	import { onMount } from 'svelte';
	import { capitalize, removeNoJSClass } from '../utilities';
	import Modal from '$lib/Modal.svelte';

	const STORAGE_KEY = 'user-preferences';
	let userMode = ['light', 'dark', 'auto'];
	let colorThemes = [
		{ name: 'default' },
		{ name: 'cupcake' },
		{ name: 'deep-blue' },
		{ name: 'terminal' }
	];
	const dataTheme = 'data-theme';
	const colorScheme = 'data-color-scheme';
	let showModal = false;
	let userTheme;
	let userColorScheme;

	const setThemeFromStorage = () => {
		const theme = localStorage.getItem(STORAGE_KEY);

		if (theme) {
			userTheme = theme;
		} else {
			userTheme = 'default';
		}
		document.documentElement.setAttribute(dataTheme, userTheme);
	};

	const selectTheme = (event) => {
		userTheme = event.target.value;

		let currentTheme = localStorage.getItem(STORAGE_KEY);
		currentTheme = userTheme;
		document.documentElement.setAttribute(dataTheme, currentTheme);
		localStorage.setItem(STORAGE_KEY, currentTheme);

		showModal = false;
	};

	const selectColorScheme = (event) => {
		let scheme = event.target.value;

		userColorScheme = scheme;

		if (userColorScheme === 'auto') {
			document.documentElement.removeAttribute(colorScheme, userColorScheme);
		} else {
			document.documentElement.setAttribute(colorScheme, userColorScheme);
		}

		showModal = false;
	};

	onMount(() => {
		setThemeFromStorage();
		removeNoJSClass();
	});
</script>

<div class="theme-selector no-js">
	<p for="theme-select">Theme</p>
	<div class="select-wrapper">
		<button on:click={() => (showModal = true)}>{userTheme}</button>
		{#if showModal}
			<Modal on:close={() => (showModal = false)}>
				<div class="color-scheme-controls">
					{#each userMode as mode}
						<button
							on:click={selectColorScheme}
							value={mode}
							class="button-color-scheme {userColorScheme === mode ? 'active' : ''}">{mode}</button
						>
					{/each}
				</div>
				<ul>
					{#each colorThemes as theme}
						<li>
							<button
								on:click={selectTheme}
								value={theme.name}
								class="button-theme {userTheme === theme.name ? 'selected' : ''}"
							>
								{capitalize(theme.name)}
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

	.color-scheme-controls {
		display: flex;
		margin: calc(var(--spacing) * 0.75) var(--spacing);
		justify-content: space-between;
		border: 1px solid var(--divider);
		border-radius: calc(var(--border-radius) * 1.5);
		padding: calc(var(--spacing-quarter) / 2);
		column-gap: calc(var(--spacing) / 8);
	}

	.button-color-scheme {
		width: 100%;
		background: transparent;
		border: 1px solid transparent;
		border-radius: calc(var(--border-radius));
		cursor: pointer;
		font-size: var(--font-size-small);
		font-weight: var(--font-weight-bold);
		text-align: center;
		margin: 0;
		color: var(--text-secondary);
	}

	.button-color-scheme:hover:not(.active) {
		border: 1px solid transparent;
		color: var(--bg-x);
	}

	.active,
	.active:hover {
		background: var(--text-secondary);
		color: var(--bg-0);
		border: 1px solid transparent;
	}

	p {
		clip-path: inset(1px);
		color: var(--text-secondary);
		display: block;
		font-size: inherit;
		height: 1px;
		overflow: hidden;
		white-space: nowrap;
		width: 1px;
	}

	@media screen and (min-width: 36em) {
		p {
			clip-path: initial;
			height: initial;
			overflow: visible;
			white-space: initial;
			width: initial;
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
		color: var(--text-secondary);
		cursor: pointer;
		font-family: inherit;
		font-size: inherit;
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
		color: var(--text-secondary);
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
