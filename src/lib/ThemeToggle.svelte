<script>
  import { onMount } from 'svelte';
  import capitalize from '../utilities';

  const STORAGE_KEY = 'user-color-scheme';
  const colorThemes = ['light', 'dark', 'system', 'terminal', 'deep-blue', 'cupcake'];
  let selected;

  const toggleTheme = () => {
    let currentSetting = localStorage.getItem(STORAGE_KEY);

    currentSetting = selected;

    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);

    localStorage.setItem(STORAGE_KEY, currentSetting);

    return currentSetting;
  };

  onMount(() => {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      selected = 'system';
    } else {
      selected = localStorage.getItem(STORAGE_KEY);
      document.documentElement.setAttribute('data-user-color-scheme', selected);
    }
  });
</script>

<div class="theme-selector">
  <label for="theme-select">Theme</label>
  <div class="select-wrapper">
    <select bind:value={selected} on:change={toggleTheme} id="theme-select">
      {#each colorThemes as theme}
        <option value={theme} selected={selected === theme}>{capitalize(theme)} </option>
      {/each}
    </select>
  </div>
</div>

<style>
  .theme-selector {
    align-items: center;
    column-gap: calc(var(--spacing) / 2);
    display: flex;
  }
  label {
    clip-path: inset(1px);
    color: var(--text-secondary);
    display: block;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  @media screen and (min-width: 36em) {
    label {
      clip-path: initial;
      height: initial;
      overflow: visible;
      position: static;
      white-space: initial;
      width: initial;
    }
  }

  .select-wrapper {
    align-items: center;
    column-gap: var(--spacing-quarter);
    display: flex;
  }

  .select-wrapper::before {
    animation: blinking 750ms ease-in-out 1250ms 4 backwards;
    content: '\276F';
  }

  select {
    -webkit-appearance: none;
    animation: none;
    appearance: none;
    background: var(--bg-main);
    border: 0;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    position: relative;
  }

  select:hover {
    color: var(--text-primary);
  }

  @keyframes blinking {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>
