<script>
	import { onMount } from 'svelte';
	import { capitalize, removeNoJSClass } from '../utilities';
	import Modal from '$lib/Modal.svelte';

	const STORAGE_KEY = 'user-color-theme';
	const colorThemes = ['system', 'cupcake', 'dark', 'deep-blue', 'light', 'terminal'];
	const dataColorScheme = 'data-user-color-theme';
	let showModal = false;
	let userTheme;

	const setThemeFromStorage = () => {
		const theme = localStorage.getItem(STORAGE_KEY);

		if (theme) {
			userTheme = theme;
		} else {
			userTheme = 'system';
		}
		document.documentElement.setAttribute(dataColorScheme, userTheme);
	};

	const selectTheme = (event) => {
		userTheme = event.target.value;

		let currentTheme = localStorage.getItem(STORAGE_KEY);
		currentTheme = userTheme;
		document.documentElement.setAttribute(dataColorScheme, currentTheme);
		localStorage.setItem(STORAGE_KEY, currentTheme);

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
				<ul>
					{#each colorThemes as theme}
						<li>
							<button
								on:click={selectTheme}
								value={theme}
								class="button-theme {userTheme === theme ? 'selected' : ''}"
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
		column-gap: calc(var(--spacing) / 2);
		display: flex;
	}

	.no-js {
		display: none;
	}

	p {
		clip-path: inset(1px);
		color: var(--text-secondary);
		display: block;
		height: 1px;
		overflow: hidden;
		white-space: nowrap;
		width: 1px;
		font-size: inherit;
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
		border-bottom: 1px solid var(--divider);
	}

	li:last-of-type {
		border-bottom: none;
	}

	.button-theme {
		align-items: center;
		background-color: transparent;
		column-gap: var(--spacing-quarter);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-weight: 500;
		padding: calc(var(--spacing) * 0.75) var(--spacing2x);
		position: relative;
		transition: background-color 200ms ease-in-out;
		width: 100%;
		margin: 0;
		border-radius: 0;
		border: none;
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
