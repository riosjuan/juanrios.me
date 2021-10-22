<script>
  import capitalize from '../utilities';

  let channels = [
    { name: 'email', url: 'mailto:juanesteban.rios@gmail.com' },
    { name: 'twitter', url: 'https://twitter.com/juanriosnl' },
    { name: 'github', url: 'https://github.com/riosjuan' },
    { name: 'linkedIn', url: 'https://nl.linkedin.com/in/juanestebanrios' },
  ];
</script>

<ul>
  {#each channels as channel}
    <li><a href={channel.url}>{capitalize(channel.name)}</a></li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    column-gap: clamp(var(--spacing), 5vw, var(--spacing2x));
  }
</style>
