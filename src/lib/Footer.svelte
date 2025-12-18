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
		margin-block-end: calc(var(--line-height));

		p {
			font-size: var(--font-size-small);
			margin: 0;
			text-transform: uppercase;
		}
	}
</style>
