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
	main {
		margin-top: var(--spacing2x);
		max-width: 72rem;
		margin-inline: auto;
		padding-inline: 1.5rem;
	}

	:global(.page-grid) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}
</style>
