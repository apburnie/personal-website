<script lang="ts">
	export let heading: string;
	export let id: string;

	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}
</script>

<div class="Dropdown">
	<h3>
		<button
			class={isOpen && 'isOpen'}
			type="button"
			aria-expanded={String(isOpen)}
			aria-controls={id}
			on:click={handleClick}
		>
			<span>{heading}</span>
			<img
				class={isOpen && 'openIcon'}
				alt={isOpen ? 'close text icon' : 'open text icon'}
				src="/assets/chevron.svg"
			/>
		</button>
	</h3>
	<div {id} class={!isOpen && 'hidden'}><slot /></div>
</div>

<style>
	.Dropdown {
		margin-bottom: 1rem;
		width: min(calc(25rem - 20px), 90vw);
	}

	h3 {
		margin: 0;
	}

	h3 button {
		text-align: left;
		width: min(calc(25rem - 20px), 90vw);
		display: flex;
		justify-content: space-between;
		border: none;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 1rem;
		color: black;
		font-size: 1.25rem;
		background: #00ceff;
		cursor: pointer;
	}

	.Dropdown div {
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		position: absolute;
		width: min(calc(25rem - 20px), 90vw);
		box-sizing: border-box;
		background: black;
	}

	h3 button:hover,
	h3 button.isOpen {
		background: #00ffb3;
	}

	.hidden {
		display: none;
	}

	img.openIcon {
		transform: rotate(180deg);
	}
</style>
