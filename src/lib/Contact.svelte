<script>
	import contactData from '../data/contact.json';
</script>

<ul>
	{#each contactData as contact}
		<li><a href={contact.url}>{contact.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		column-gap: clamp(1.5rem, 3.5vw, 3rem);
		margin-bottom: 6rem;
	}

	li {
		line-height: 1;
	}

	a {
		font-size: 1rem;
		font-weight: var(--font-weight);
		text-transform: capitalize;
	}
</style>
