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
		font-size: 1rem;
		margin-block-end: calc(var(--line-height) * 2);
		text-transform: uppercase;

		& p {
			font-size: inherit;
			margin: 0;
		}
	}
</style>
