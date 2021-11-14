<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} on:scroll={close} />

<div class="popup-backdrop" on:click={close} />

<div
	class="modal"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
	in:scale={{ duration: 100, start: 0.95, easing: quadIn }}
>
	<slot />
</div>

<style>
	.popup-backdrop {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		background: transparent;
		opacity: 0.12;
	}

	.modal {
		position: absolute;
		top: var(--spacing2x);
		right: 0;
		padding: 0;
		background-color: var(--bg-1);
		width: calc(var(--spacing) * 15);
		border-radius: calc(var(--border-radius) * 2);
		box-shadow: var(--shadow);
	}
</style>
