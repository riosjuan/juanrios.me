<script>
  import { fade } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';

  import ThemeToggle from './ThemeToggle.svelte';

  let links = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header role="banner" class:on-scroll={y >= 48} transition:fade={{ delay: 100, duration: 400, easing: quartIn }}>
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
    flex-wrap: wrap;
    height: var(--spacing4x);
    justify-content: space-between;
    padding: 0 clamp(var(--spacing), 5vw, calc(var(--spacing) * 2));
    position: sticky;
    top: 0;
  }

  .on-scroll {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid var(--divider);
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
