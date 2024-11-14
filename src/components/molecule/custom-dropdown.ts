import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import chevronImg from "../../assets/chevron.svg";

@customElement("custom-dropdown")
export class CustomDropdown extends LitElement {
	@property()
	heading?: string;

	@property()
	customID?: string;

	@state()
	private _isOpen = false;

	private changeOpen() {
		this._isOpen = !this._isOpen;
	}

	static styles = css`
	dropdown-container {
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

	dropdown-container div {
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
	  `;

	render() {
		return html`
<dropdown-container>
	<h3>
		<button
			class="${this._isOpen && "isOpen"}"
			type="button"
			aria-expanded="${String(this._isOpen)}"
			aria-controls="${this.customID}"
@click="${this.changeOpen}"
		>
			<span>${this.heading}</span>
			<img
				class=${this._isOpen && "openIcon"}
				alt="${this._isOpen ? "close text icon" : "open text icon"}"
				src=${chevronImg}
			/>
		</button>
	</h3>
	<div {id} class="${!this._isOpen && "hidden"}"><slot></slot></div>
</dropdown-container>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"custom-dropdown": CustomDropdown;
	}
}
