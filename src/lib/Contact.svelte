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
		font-size: clamp(1rem, 3.5vw, 1.5rem);
		margin-block: 0 clamp(3rem, 7vw, 6rem);
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
