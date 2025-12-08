<script>
	import links from '../data/contact-links.json';
</script>

<p>
	Feel free to reach out to me at
	<a href={`mailto:${links.email}`}>{links.email}</a>, or find me elsewhere on
	<a href={links.x}>X</a>,
	<a href={links.github}>GitHub</a> and
	<a href={links.linkedin}>LinkedIn</a>.
</p>

<style>
	p {
		font-size: var(--font-size-small);
		margin-block: 0 calc(var(--line-height) * 2);
	}

	a {
		color: inherit;

		&:hover {
			color: var(--accent);
		}
	}
</style>
