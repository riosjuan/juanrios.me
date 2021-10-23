<script>
  import { fade } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<Header />
<main>
  <div>
    <h1 transition:fade={{ delay: 200, duration: 300, easing: quartIn }}>Hi, I'm Juan Rios</h1>
    <p transition:fade={{ delay: 400, duration: 300, easing: quartIn }}>
      I'm a Product Designer and Developer based in Rotterdam, The Netherlands. I have 10+ years of experience building
      digital products and services.
    </p>
    <p transition:fade={{ delay: 600, duration: 300, easing: quartIn }}>
      Currently, I'm a Team Lead and UX Engineer at <a href="https://www.mendix.com">Mendix</a>, making apps that enable
      community and collaboration.
    </p>
  </div>
  <section id="projects" transition:fade={{ delay: 800, duration: 300, easing: quartIn }}>
    <h2>Selected Projects</h2>
    <Projects />
  </section>

  <section id="contact" transition:fade={{ delay: 1000, duration: 300, easing: quartIn }}>
    <h2>Get in touch</h2>
    <Contact />
  </section>
</main>
<Footer />

<style>
  main {
    display: grid;
    grid-template-rows: 1fr;
    padding: 0 clamp(var(--spacing), 5vw, var(--spacing2x));
    row-gap: calc(var(--spacing) * 5);
    margin-top: var(--spacing2x);
  }

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
