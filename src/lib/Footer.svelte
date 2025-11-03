<script>
	const year = new Date().getFullYear();
</script>

<footer class="container">
	<p>
		&copy; {year} Juan Rios
	</p>
</footer>

<style>
	footer {
		align-items: center;
		color: var(--text-primary);
		display: flex;
		font-size: clamp(0.75rem, 1.5vw, 0.875rem);
		margin-block-end: 3rem;
		text-transform: uppercase;

		& p {
			font-size: inherit;
			margin: 0;
		}
	}
</style>
