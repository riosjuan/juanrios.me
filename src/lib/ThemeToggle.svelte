<script>
  import { onMount } from 'svelte';
  import capitalize from '../utilities';

  const STORAGE_KEY = 'user-color-scheme';
  const colorThemes = [
    'light',
    'dark',
    'system',
    'terminal',
    'deep-blue',
    'cupcake',
  ];
  let selected;

  const toggleTheme = () => {
    let currentSetting = localStorage.getItem(STORAGE_KEY);

    currentSetting = selected;

    document.documentElement.setAttribute(
      'data-user-color-scheme',
      currentSetting
    );

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

<div class="color-mode">
  <label for="theme-select">Theme</label>
  <div class="select-wrapper">
    <select bind:value={selected} on:change={toggleTheme} id="theme-select">
      {#each colorThemes as theme}
        <option value={theme} selected={selected === theme}
          >{capitalize(theme)}
        </option>
      {/each}
    </select>
  </div>
</div>

<style>
  .color-mode {
    display: flex;
    align-items: center;
    column-gap: calc(var(--spacing) / 2);
  }
  label {
    height: 1px;
    width: 1px;
    overflow: hidden;
    display: block;
    clip-path: inset(1px);
    white-space: nowrap;
    color: var(--text-secondary);
    position: absolute;
    /* opacity: 0.8; */
  }

  @media screen and (min-width: 36em) {
    label {
      overflow: visible;
      height: initial;
      width: initial;
      position: static;
      white-space: initial;
      clip-path: initial;
    }
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    column-gap: calc(var(--spacing) / 4);
  }

  .select-wrapper::before {
    content: '\276F';
    animation: blinking 750ms ease-in-out 1250ms var(--animation-count)
      backwards;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    font-size: inherit;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: inherit;
    background: transparent;
    padding: 0;
    border: 0;
    position: relative;
    animation: none;
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
