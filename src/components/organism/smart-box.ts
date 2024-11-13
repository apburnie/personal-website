import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../molecule/info-box";
import "../molecule/custom-dropdown";

@customElement("smart-box")
export class SmartBox extends LitElement {
	@property()
	heading?: string;

	@property()
	customID?: string;

	static styles = css`
smart-box-desktop {
		display: none;
	}

	@media only screen and (min-width: 1200px) {
		smart-box-mobile {
			display: none;
		}
		smart-box-desktop {
			display: block;
		}
	}
	  `;

	render() {
		return html`
<smart-box-mobile>
	<custom-dropdown heading="${this.heading}" customID="${this.customID}"><slot/></custom-dropdown>
</smart-box-mobile>

<smart-box-desktop>
	<info-box heading="${this.heading}" customID="${this.customID}"><slot/></info-box>
</smart-box-desktop>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"smart-box": SmartBox;
	}
}
