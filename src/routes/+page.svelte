<script>
	import OpenGraph from '$lib/OpenGraph.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';

	let { data } = $props();
	const projects = $derived(data.projects);

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
	<h1>Hi, I'm Juan Rios</h1>
	<p>
		I lead teams and build platforms that make digital products easier to design, build, and scale.
	</p>
	<p>
		I’m a Team Manager and UX Engineer at <a href="https://www.mendix.com">Mendix</a>, where I work
		on design systems and platform UI used across the organization. With a background in product
		design and front-end development, I combine strategic leadership with hands-on experience.
	</p>
</div>
<section>
	<h2>What I do</h2>
	<p>I work at the intersection of leadership, design, and engineering.</p>
	<p>Today, my focus is on:</p>
	<ul>
		<li>Leading and growing cross-functional teams</li>
		<li>Owning and evolving design systems and platform UI</li>
		<li>Ensuring quality, accessibility, and scalability across products</li>
		<li>Translating strategy into clear roadmaps and shipped outcomes</li>
	</ul>
	<p>
		I still enjoy getting hands-on when it adds value, particularly around UX, front-end
		architecture, and system-level design decisions.
	</p>
</section>
<section id="work">
	<h2>Selected Work</h2>
	<p>
		These projects reflect my background as a designer, developer, and maker. This hands-on
		experience helps how I lead teams and make product decisions today.
	</p>
	<Projects {projects} />
</section>

<section id="contact">
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

	p {
		margin-block: 0 var(--line-height);
	}

	p + p {
		margin-block-end: 0;
	}

	ul {
		font-size: var(--font-size-medium);
		list-style: disc;
		padding-inline-start: calc(var(--inline-spacing) * 2);
		margin-inline-start: var(--inline-spacing);
		margin-block: var(--line-height);
		line-height: var(--line-height);
	}

	section {
		margin-block-start: calc(var(--line-height) * 3);
		scroll-margin-top: 8rem;

		> h2 {
			color: var(--text-secondary);
			font-size: var(--font-size-small);
			font-style: normal;
			font-weight: var(--font-weight);
			letter-spacing: calc(var(--letter-spacing) * -12);
			line-height: 1;
			margin-block-end: var(--line-height);
			margin-block-start: 0;
			text-transform: uppercase;
		}
	}
</style>
