import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("info-box")
export class InfoBox extends LitElement {
	@property()
	heading?: string;

	@property()
	customID?: string;

	static styles = css`
	info-box-container {
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

	info-box-container div {
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		padding: 1rem;
		box-sizing: border-box;
		background: #00141a;
	}
	  `;

	render() {
		return html`
<info-box-container>
	<h3>
		${this.heading}
	</h3>
	<div id="${this.customID}"><slot/></div>
</info-box-container>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"info-box": InfoBox;
	}
}
