<script>
	import contactData from '../data/contact.json';
</script>

<p>
	Feel free to reach out to me at <a href={contactData.email.url}>{contactData.email.text}</a>, or
	find me elsewhere on <a href={contactData.xcom.url}>{contactData.xcom.text}</a>,
	<a href={contactData.github.url}>{contactData.github.text}</a>, and
	<a href={contactData.linkedin.url}>{contactData.linkedin.text}</a>.
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
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
