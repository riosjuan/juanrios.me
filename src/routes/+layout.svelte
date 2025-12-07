<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<Header />
<main class="container">
	{@render children?.()}
</main>
<Footer />

<style>
	:global(.container) {
		padding-inline: 1.5rem;
		max-width: 72rem;
		margin-inline: auto;
	}
</style>
