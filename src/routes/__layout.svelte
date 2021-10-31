<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../global.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		display: grid;
		grid-template-rows: 1fr;
		padding: 0 clamp(var(--spacing), 5vw, var(--spacing2x));
		row-gap: calc(var(--spacing) * 5);
		margin-top: var(--spacing2x);
	}
</style>
