<script>
	import socialLinks from '../data/social-links.json';
</script>

<p>
	Feel free to reach out to me at <a href={socialLinks.email.url}>{socialLinks.email.text}</a>, or
	find me elsewhere on <a href={socialLinks.x.url}>{socialLinks.x.text}</a>,
	<a href={socialLinks.github.url}>{socialLinks.github.text}</a>, and
	<a href={socialLinks.linkedin.url}>{socialLinks.linkedin.text}</a>.
</p>

<style>
	p {
		font-size: var(--font-size-small);
		margin-block: 0 calc(var(--line-height) * 2);
		max-width: 48ch;
	}

	a {
		color: inherit;
		font-weight: inherit;

		&:hover {
			color: var(--accent);
		}
	}
</style>
