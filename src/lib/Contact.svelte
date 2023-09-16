<script>
	const contact = {
		email: { text: 'juanesteban.rios@gmail.com', url: 'mailto:juanesteban.rios@gmail.com' },
		xcom: { text: 'x.com', url: 'https://x.com/juanriosnl' },
		github: { text: 'Github', url: 'https://github.com/riosjuan' },
		linkedin: { text: 'LinkedIn', url: 'https://nl.linkedin.com/in/juanestebanrios' }
	};
</script>

<p>
	Feel free to reach out to me at <a href={contact.email.url}>{contact.email.text}</a>, or find me
	elsewhere on <a href={contact.xcom.url}>{contact.xcom.text}</a>,
	<a href={contact.github.url}>{contact.github.text}</a>, and
	<a href={contact.linkedin.url}>{contact.linkedin.text}</a>.
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
