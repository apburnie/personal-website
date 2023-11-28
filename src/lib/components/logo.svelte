<div class="Container">
	<div class="ImageContainer">
		<img src="/assets/cog.svg" alt="cog" class="cogLarge clockwise" />
		<img src="/assets/cog.svg" alt="cog" class="cogSmall anticlockwise" />
	</div>
	<div class="Text">
		<h1>Andrew Burnie</h1>
		<strong>The UI Noodler</strong>
	</div>
</div>

<style>
	@keyframes spinClockwise {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes spinAntiClockwise {
		100% {
			transform: rotate(-360deg);
		}
	}

	.cogLarge {
		height: 3rem;
	}

	.cogSmall {
		height: 1.5rem;
		margin-top: 1rem;
	}

	.clockwise {
		animation: spinClockwise 10s linear infinite;
	}

	.anticlockwise {
		animation: spinAntiClockwise 10s linear infinite;
	}

	.Container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24rem;
	}

	.ImageContainer {
		padding: 1rem;
		display: flex;
		align-items: end;
	}

	.Text {
		font-size: 1rem;
		padding: 0.5rem;
		box-shadow: 0px 0px 10px #4dffff;
		background-color: #4dffff;
		margin: 10px;
		border-radius: 10px;
	}

	h1 {
		margin: 0;
	}

	strong {
		display: block;
		margin-left: auto;
		width: fit-content;
	}
</style>
