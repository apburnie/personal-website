<script lang="ts">
	export let heading: string;
	export let id: string;
</script>

<div class="InfoBox">
	<h3>
		{heading}
	</h3>
	<div {id}><slot /></div>
</div>

<style>
	.InfoBox {
		margin-bottom: 1rem;
		width: min(26rem, 90vw);
		border: 1px solid #005e7a;
		border-radius: 20px;
	}

	h3 {
		margin: 0;
		text-align: left;
		display: flex;
		justify-content: space-between;
		border: none;
		padding: 1rem;
		color: black;
		font-size: 1.25rem;
		background: #00ceff;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.InfoBox div {
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		padding: 1rem;
		box-sizing: border-box;
		background: #00141a;
	}
</style>
