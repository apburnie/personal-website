<script>
	export let href;
	export let label;
</script>

<a {href} target="_blank" rel="noreferrer">
	{label}
</a>

<style>
	a {
		color: #7436b3;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
