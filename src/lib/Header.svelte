<script>
  import { fade } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';

  import ThemeToggle from './ThemeToggle.svelte';

  let links = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];
</script>

<header role="banner" transition:fade={{ delay: 100, duration: 400, easing: quartIn }}>
  <nav>
    <ul>
      {#each links as link}
        <li>
          <a href={link.url}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <ThemeToggle />
</header>

<style>
  header {
    align-items: center;
    display: flex;
    height: var(--spacing3x);
    justify-content: space-between;
    padding: var(--spacing) clamp(var(--spacing), 5vw, calc(var(--spacing) * 2));
  }

  nav {
    font-weight: 500;
  }

  ul {
    column-gap: clamp(var(--spacing), 5vw, var(--spacing2x));
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
