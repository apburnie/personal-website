<div class="Container">
	<row-one>
		<img src="/assets/profileLarge.png" alt="Andrew Burnie" />
		<author-slogan>
			<author-name>Andrew Burnie</author-name>
			<slogan-text>Fast Frontends Delivered Fast</slogan-text>
		</author-slogan>
	</row-one>

	<div class="Text">
		<p>I deliver low-latency frontends in under 6 weeks for DeFi, Cryptoasset and AI companies.</p>
		<p>
			Scroll down to find out more about the services I provide, past successes and contact details
		</p>
	</div>
</div>

<style>
	@keyframes shiftRight {
		0% {
			left: -100vw;
			font-style: oblique -20deg;
		}
		89% {
			left: 2vw;
			font-style: normal;
		}
		100% {
			left: 0;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	row-one {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80vw;
		flex-wrap: wrap-reverse;
		margin: auto;
		gap: 2rem;
	}

	author-slogan {
		display: flex;
		flex-direction: column;
		align-items: end;
		font-size: 2rem;
		position: relative;
		animation-name: shiftRight;
		animation-duration: 3s;
		animation-iteration-count: 1;
	}

	author-name {
		font-weight: 700;
		text-align: end;
	}

	slogan-text {
		font-weight: 600;
		text-align: end;
	}

	.Container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: end;
	}

	.Text {
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 6s;
		animation-iteration-count: 1;
	}

	img {
		border-style: solid;
		border-radius: 150px;
		background-image: linear-gradient(to bottom, #d4ce91, #c7c06d);
		height: 5rem;
		width: 5rem;
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 6s;
		animation-iteration-count: 1;
	}

	@media only screen and (min-width: 1200px) {
		author-slogan {
			font-size: 5rem;
			width: fit-content;
			text-align: right;
		}

		img {
			height: 10rem;
			width: 10rem;
		}
	}
</style>
