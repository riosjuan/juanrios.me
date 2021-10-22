<script>
  import { fade, slide } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';

  import ThemeToggle from './ThemeToggle.svelte';

  let links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contacts',
    },
  ];
</script>

<header transition:slide={{ delay: 100, duration: 400, easing: quartIn }}>
  <div class="controls">
    <nav>
      <ul>
        {#each links as link}
          <li><a href={link.url}>{link.name}</a></li>
        {/each}
      </ul>
    </nav>
    <ThemeToggle />
  </div>
  <div>
    <p
      class="paragraph-l"
      transition:fade={{ delay: 200, duration: 300, easing: quartIn }}
    >
      Hi, I'm Juan Rios
    </p>
    <p transition:fade={{ delay: 400, duration: 300, easing: quartIn }}>
      I'm a UX Engineer and Product Designer with 10+ years of experience
      building digital products and services. I'm based in Rotterdam, The
      Netherlands.
    </p>
    <p transition:fade={{ delay: 600, duration: 300, easing: quartIn }}>
      Currently I'm working at <a href="https://www.mendix.com">Mendix</a> making
      some of the apps of the Developer Platform.
    </p>
  </div>
</header>

<style>
  header {
    padding: var(--spacing) clamp(var(--spacing), 5vw, calc(var(--spacing) * 2));
  }

  .controls {
    height: calc(var(--spacing) * 3);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    font-weight: 500;
  }

  ul {
    display: flex;
    list-style: none;
    column-gap: clamp(var(--spacing), 5vw, var(--spacing2x));
    margin: 0;
    padding: 0;
  }

  .paragraph-l {
    font-size: var(--font-heading);
    font-weight: var(--font-weight-headline);
    line-height: 1.3;
  }
</style>
