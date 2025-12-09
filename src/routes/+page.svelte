<script>
	import { slideIn } from '../utilities';
	import OpenGraph from '$lib/OpenGraph.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';

	let { data } = $props();
	const { projects } = data;

	let openGraphData = {
		title: 'Juan Rios - Product Designer and Developer',
		description:
			'Product Designer and Developer with over 10 years of experience building digital products and services.',
		url: 'https://juanrios.me',
		ogImage: 'og-image.png'
	};
</script>

<OpenGraph {...openGraphData} />

<div>
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
	<Projects {projects} />
</section>

<section id="contact" style={slideIn(6)}>
	<h2>Get in touch</h2>
	<Contact />
</section>

<style>
	div {
		margin-block-start: calc(var(--line-height) * 6);
	}

	h1 {
		font-size: var(--font-size-x-large);
		font-weight: var(--font-weight-bold);
		margin-block: 0 calc(var(--line-height) / 2);
	}

	a {
		color: inherit;
		transition: none;
	}

	p + p {
		margin-block-end: 0;
	}

	section {
		margin-block-start: calc(var(--line-height) * 3);
		scroll-margin-top: 8rem;

		> h2 {
			color: var(--text-secondary);
			font-size: var(--font-size-fixed);
			font-style: normal;
			font-weight: var(--font-weight);
			letter-spacing: calc(var(--letter-spacing) * -12);
			margin-block-end: var(--line-height);
			margin-block-start: 0;
			text-transform: uppercase;
		}
	}
</style>
