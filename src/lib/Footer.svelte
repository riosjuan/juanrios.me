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
		margin-block-end: 3rem;
		margin-inline: auto;
		max-width: 72rem;
		padding-inline: 1.5rem;
		text-transform: uppercase;
	}

	p {
		font-size: inherit;
		margin: 0;
	}
</style>
