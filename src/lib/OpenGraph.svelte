<script>
	export let title = '';
	export let description = '';
	export let url = '';
	export let ogImage = '';

	$: fullImageUrl = `${url}/${ogImage}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={fullImageUrl} />
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />
	<meta name="twitter:site" content="@juanriosnl" />
</svelte:head>
