import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../molecule/navigation/mobile.ts";

@customElement("navigation-wrapper")
export class NavigationWrapper extends LitElement {
	@property({ type: String })
	activeSection?: string;

	static styles = css`
	/* Header */
	header {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		position: fixed;
		top: 0;
		align-items: center;
		justify-content: start;
		z-index: 2;
		padding-bottom: 10px;
		background: none;
		height: 5rem;
	}

	mobile-nav-container,
	desktop-nav-container {
		width: 100%;
		z-index: 3;
		display: block;
	}

	/* Desktop Nav bar present only on larger screens */
	desktop-nav-container {
		display: none;
	}

	mobile-nav-container {
		display: flex;
		justify-content: space-between;
		padding-right: 2vw;
		align-items: center;
	}

	jump-to-contact {
		border: 1px solid #fac79e;
		padding: 0.5rem;
		border-radius: 10px;
		background: black;
	}

	jump-to-contact a {
		text-decoration: none;
		color: #fac79e;
	}

	/* Enforces presence / absence of nav bars */
	@media only screen and (min-width: 1200px) {
		mobile-nav-container {
			display: none;
		}
		desktop-nav-container {
			display: block;
		}
	}

  `;

	render() {
		return html`
<header>
	<mobile-nav-container>
        <nav-mobile/>
		<jump-to-contact><a href="#Contact">Contact</a></jump-to-contact>
	</mobile-nav-container>

	<desktop-nav-container>
        <div>${this.activeSection}</div>
	</desktop-nav-container>
</header>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"navigation-wrapper": NavigationWrapper;
	}
}
