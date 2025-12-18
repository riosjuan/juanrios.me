<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles.css';

	let { children } = $props();
</script>

<Header />
<main class="main container">
	{@render children?.()}
</main>
<Footer />
