<script>
	import { onMount } from 'svelte';
	import { capitalize, removeNoJSClass } from '../utilities';
	import Modal from '$lib/Modal.svelte';

	let showModal = false;

	const STORAGE_KEY = 'user-color-theme';
	const colorThemes = ['system', 'cupcake', 'dark', 'deep-blue', 'light', 'terminal'];
	const dataColorScheme = 'data-user-color-theme';
	let userTheme;

	const setTheme = () => {
		const theme = localStorage.getItem(STORAGE_KEY);

		if (theme) {
			userTheme = theme;
		} else {
			userTheme = 'system';
		}
		document.documentElement.setAttribute(dataColorScheme, userTheme);
	};

	const selectTheme = (e) => {
		userTheme = e.target.innerText.toLowerCase();

		let currentTheme = localStorage.getItem(STORAGE_KEY);
		currentTheme = userTheme;
		document.documentElement.setAttribute(dataColorScheme, currentTheme);
		localStorage.setItem(STORAGE_KEY, currentTheme);

		showModal = false;
	};

	onMount(() => {
		setTheme();
		removeNoJSClass();
	});
</script>

<div class="theme-selector no-js">
	<label for="theme-select">Theme</label>
	<div class="select-wrapper">
		<button on:click={() => (showModal = true)}>{userTheme}</button>
		{#if showModal}
			<Modal on:close={() => (showModal = false)}>
				<ul>
					{#each colorThemes as theme}
						<li>
							<button on:click|preventDefault={selectTheme}>
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
		background-color: transparent;
		border-radius: var(--border-radius);
		color: var(--accent-color);
		margin: 0 calc(var(--spacing-quarter) * -1);
		padding: calc(var(--spacing) / 8) var(--spacing-quarter);
		transition: color 200ms ease-in-out, background-color 150ms ease-in-out;
		appearance: none;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		text-transform: capitalize;
		font-weight: 500;
	}

	button:hover {
		color: var(--bg-main);
		background-color: var(--accent-color);
	}

	li {
		cursor: pointer;
		white-space: nowrap;
		border-bottom: 1px solid var(--divider);
	}

	li button {
		padding: var(--spacing) var(--spacing2x);
		margin: 0;
		width: 100%;
		transition: background-color 0.2s ease-in-out;
		font-family: inherit;
		text-align: left;
	}

	li button:hover {
		color: var(--text-primary);
		background-color: rgba(255, 255, 255, 0.12);
	}

	li:last-of-type {
		border-bottom: none;
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
