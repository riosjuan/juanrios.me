<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles.css';
</script>

<Header />
<main class="container">
	<slot />
</main>
<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}

	:global(.container) {
		padding-inline: 1.5rem;
		max-width: 72rem;
		margin-inline: auto;
	}
</style>
