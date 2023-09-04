<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles.css';
</script>

<Header />
<main class="page-grid">
	<slot />
</main>
<Footer />

<style>
	:global(:root) {
		--bg-color: hsla(280, 10%, 7%, 1);
		--text-color: hsla(150, 95%, 96%, 1);
	}

	main {
		/* padding: 0 clamp(var(--spacing), 5vw, var(--spacing2x));
		row-gap: calc(var(--spacing) * 5); */
		margin-top: var(--spacing2x);
		max-width: 72rem;
		margin-inline: auto;
		padding-inline: 1.5rem;
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--text-color);
		/* font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; */
		font-weight: 300;
		font-size: 2.5rem;
		/* letter-spacing: 1.5px; */
	}

	:global(.page-grid) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}
</style>
