<script>
	import links from '../data/contact-links.json';
</script>

<p>
	If you’d like to collaborate, discuss a project, or simply get in touch, feel free to reach out.
	You can contact me at <a href={`mailto:${links.email}`}>{links.email}</a> or find me on
	<a href={links.x}>X</a>, <a href={links.github}>GitHub</a>, and
	<a href={links.linkedin}>LinkedIn</a>.
</p>

<style>
	p {
		margin-block: 0 calc(var(--line-height) * 2);
	}

	a {
		color: inherit;

		&:hover {
			color: var(--accent);
		}
	}
</style>
