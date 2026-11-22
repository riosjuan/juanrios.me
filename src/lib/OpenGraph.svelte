<script>
	let {
		title = '',
		description = '',
		url = '',
		ogImage = '',
		ogImageAlt = '',
		ogImageWidth = 1200,
		ogImageHeight = 630,
		twitterHandle = '',
		structuredData = null
	} = $props();
	let fullImageUrl = $derived(`${url}/${ogImage}`);

	// Escape `<` so the serialized JSON can never close the script tag early.
	let structuredDataScript = $derived(
		structuredData
			? `<script type="application/ld+json">${JSON.stringify(structuredData).replace(
					/</g,
					'\\u003c'
				)}</` + 'script>'
			: ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={fullImageUrl} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:image:width" content={String(ogImageWidth)} />
	<meta property="og:image:height" content={String(ogImageHeight)} />
	{#if ogImageAlt}
		<meta property="og:image:alt" content={ogImageAlt} />
		<meta name="twitter:image:alt" content={ogImageAlt} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />
	<meta name="twitter:site" content={twitterHandle} />
	{#if structuredDataScript}
		<!-- Safe: built from local static data via JSON.stringify with `<` escaped. -->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html structuredDataScript}
	{/if}
</svelte:head>
