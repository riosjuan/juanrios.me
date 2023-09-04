<script>
	import { slideIn } from '../utilities';
	import OpenGraph from '$lib/OpenGraph.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';

	let openGraphData = {
		title: 'Juan Rios - Product Designer and Developer',
		description:
			'Product Designer and Developer with over 10 years of experience building digital products and services.',
		url: 'https://juanrios.me',
		ogImage: 'og-image.png'
	};
</script>

<OpenGraph {...openGraphData} />

<div class="container" style="margin-top: 8rem;">
	<h1 style={slideIn(2)}>Hi, I'm Juan Rios</h1>
	<p style={slideIn(3)}>
		I'm a Product Designer and Developer based in Rotterdam, The Netherlands. I have 10+ years of
		experience building digital products and services.
	</p>
	<p style={slideIn(4)}>
		Currently, I'm a Team Lead and UX Engineer at <a href="https://www.mendix.com">Mendix</a>,
		making apps that enable community and collaboration.
	</p>
</div>
<section id="projects" style={slideIn(5)}>
	<h2>Selected Projects</h2>
	<Projects />
</section>

<section id="contact" style={slideIn(6)}>
	<h2>Get in touch</h2>
	<Contact />
</section>

<style>
	:global(.container) {
		grid-column: 1/7;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		line-height: 1.3;
		margin-block: 0 2.4rem;
	}

	h2 {
		color: #979797;
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 56px; /* 175% */
		margin-block-start: 0;
		margin-block-end: 1.5rem;
	}

	a {
		color: inherit;
		transition: color 150ms ease-in-out;
	}

	a:hover {
		color: hsla(150, 95%, 50%, 1);
	}

	p + p {
		margin-bottom: 0;
	}

	section {
		scroll-margin-top: calc(var(--spacing) * 5);
		grid-column: 1/7;
		margin-block-start: 9rem;
	}
</style>
