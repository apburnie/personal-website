<script lang="ts">
	import InfoBox from '$lib/components/molecule/InfoBox.svelte';
	import Dropdown from '$lib/components/molecule/Dropdown.svelte';
	export let heading: string;
	export let id: string;
</script>

<div class="Mobile">
	<Dropdown {heading} {id}><slot /></Dropdown>
</div>

<div class="Desktop">
	<InfoBox {heading} {id}><slot /></InfoBox>
</div>

<style>
	.Desktop {
		display: none;
	}

	@media only screen and (min-width: 1200px) {
		.Mobile {
			display: none;
		}
		.Desktop {
			display: block;
		}
	}
</style>
