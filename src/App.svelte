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
  <section
    id="projects"
    transition:fade={{ delay: 800, duration: 300, easing: quartIn }}
  >
    <h2>Selected Projects</h2>
    <Projects />
  </section>

  <section id="contacts">
    <h2>Get in touch</h2>
    <Contact />
  </section>
</main>
<Footer />

<style>
  main {
    display: grid;
    grid-template-rows: 1fr;
    row-gap: calc(var(--spacing) * 5);
    padding: 0 clamp(var(--spacing), 5vw, var(--spacing2x));
  }
</style>
