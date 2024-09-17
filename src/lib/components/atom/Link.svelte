<script>
	export let href;
	export let label;
</script>

<a {href} target="_blank" rel="noreferrer">
	{label}
</a>

<style>
	a {
		color: #99ebff;
		text-decoration: none;
		font-weight: 500;
	}

	a:hover {
		color: #00ceff;
	}
</style>
