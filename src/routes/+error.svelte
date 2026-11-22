<script>
	import { page } from '$app/state';

	const isNotFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{isNotFound ? 'Page not found' : 'Something went wrong'} – Juan Rios</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div>
	<h1>{isNotFound ? 'This page doesn’t exist.' : 'Something went wrong.'}</h1>
	<p>
		{isNotFound
			? 'The link may be broken or the page may have moved.'
			: 'Please try again in a moment.'}
		<a href="/">Go back home</a>.
	</p>
</div>

<style>
	div {
		margin-block: calc(var(--line-height) * 5);
	}

	h1 {
		font-size: var(--font-size-x-large);
		font-weight: var(--font-weight-bold);
		margin-block: 0 calc(var(--line-height) / 2);
		line-height: calc(var(--line-height) / 1.3);
	}
</style>
