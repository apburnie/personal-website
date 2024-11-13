import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import constellationImg from "../../assets/rocket/constel.svg";
import rocketImg from "../../assets/rocket/rocket.svg";
import profileImg from "../../assets/profileLarge.png";

@customElement("about-me")
export class AboutMe extends LitElement {
	static styles = css`
	rocket-container {
		height: fit-content;
		padding: 1rem;
		box-sizing: border-box;
		background-image: url('${unsafeCSS(constellationImg)}');
		position: relative;
		background-position: 0px 0px;
		background-repeat: repeat-x;
		animation: animatedBackground 10s linear infinite;
		background-size: cover;
	}

	rocket-container img {
		animation: expandRocket 10s ease-in;
		max-width: 80vw;
	}

	rocket-fuel-text {
		display: inline;
		background: linear-gradient(to right, #f0bb47ff, #ff8573);
		color: transparent;
		background-clip: text;
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

	aboutme-container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	text-container {
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 6s;
		animation-iteration-count: 1;
		text-align: center;
	}

	profile-container {
		margin-left: auto;
	}

	profile-container img {
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

		profile-container img {
			height: 10rem;
			width: 10rem;
		}
	}

	@keyframes animatedBackground {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 0;
		}
	}

	@keyframes expandRocket {
		from {
			transform: scale(0.1);
		}
		to {
			transform: scale(1);
		}
	}

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

  `;

	render() {
		return html`
	<row-one>
		<profile-container>
			<img src=${profileImg} alt="Andrew Burnie" />
		</profile-container>
		<author-slogan>
			<author-name>Andrew Burnie</author-name>
			<slogan-text>Fast Frontends <rocket-fuel-text>Delivered</rocket-fuel-text></slogan-text>
		</author-slogan>
	</row-one>

	<rocket-container>
		<img alt="rocket" src=${rocketImg} />
	</rocket-container>

	<text-container>
		<p>My websites have raised USD 310 million</p>
		<p>
			Secure, responsive, low-latency frontends delivered under tight timelines around your needs
		</p>
		<p>Specialist expertise in AI, Cryptoassets and Web3</p>
	</text-container>

          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"about-me": AboutMe;
	}
}
