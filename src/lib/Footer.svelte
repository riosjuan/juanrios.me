<script>
  let year = new Date().getFullYear();
</script>

<footer>
  <p>
    &#169 {year} Juan Rios
  </p>
</footer>

<style>
  footer {
    align-items: center;
    color: var(--text-secondary);
    display: flex;
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    height: var(--spacing3x);
    margin-top: clamp(var(--spacing2x), 5vw, var(--spacing4x));
    padding: 0 clamp(var(--spacing), 5vw, var(--spacing2x));
    text-transform: uppercase;
  }

  p {
    font-size: inherit;
    margin: 0;
  }
</style>
