<script lang="ts">
	export let author: string;
	export let id: string;

	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}
</script>

<div class="Client">
	<h3>
		<button
			class={isOpen && 'isOpen'}
			type="button"
			aria-expanded={String(isOpen)}
			aria-controls={id}
			on:click={handleClick}
		>
			<span>{author}</span>
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
	.Client {
		margin: 1rem;
	}
	h3 {
		margin: 0;
	}

	h3 button {
		width: min(calc(50rem - 20px), 90vw);
		text-align: left;
		font-size: 1rem;
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		border: none;
		background: #41364d;
		cursor: pointer;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 1rem;
		color: #fbfafc;
	}

	.Client div {
		background-image: linear-gradient(to right, white, #f6f5ef 50%, white 80%, #f6f5ef 100%);
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		padding: 1rem;
		color: black;
	}

	h3 button:hover,
	h3 button.isOpen {
		background: #7436b3;
	}

	.hidden {
		display: none;
	}

	img.openIcon {
		transform: rotate(180deg);
	}
</style>
