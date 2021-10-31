<script>
	import OpenGraph from '$lib/OpenGraph.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';

	let intro = (delay) => {
		return `animation: introAnimation 300ms var(--timing) ${delay}ms backwards`;
	};
</script>

<OpenGraph />

<div>
	<h1 style={intro(200)}>Hi, I'm Juan Rios</h1>
	<p style={intro(400)}>
		I'm a Product Designer and Developer based in Rotterdam, The Netherlands. I have 10+ years of
		experience building digital products and services.
	</p>
	<p style={intro(600)}>
		Currently, I'm a Team Lead and UX Engineer at <a href="https://www.mendix.com">Mendix</a>,
		making apps that enable community and collaboration.
	</p>
</div>
<section id="projects" style={intro(800)}>
	<h2>Selected Projects</h2>
	<Projects />
</section>

<section id="contact" style={intro(1000)}>
	<h2>Get in touch</h2>
	<Contact />
</section>

<style>
	h1 {
		font-size: var(--font-heading);
		font-weight: var(--font-weight-headline);
		line-height: 1.3;
	}

	p + p {
		margin-bottom: 0;
	}

	section {
		scroll-margin-top: calc(var(--spacing) * 5);
	}
</style>
