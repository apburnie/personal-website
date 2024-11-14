import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "../molecule/info-box";
import "../molecule/custom-dropdown";

@customElement("smart-box")
export class SmartBox extends LitElement {
	@property()
	heading?: string;

	@property()
	customID?: string;

	@state()
	_isDesktop?: boolean;

	constructor() {
		super();

		this._isDesktop = window.innerWidth > 1200;

		window.addEventListener("resize", () => this._handleResize(window));
	}

	protected _handleResize(window: Window) {
		const newIsDesktop = window.innerWidth > 1200;

		if (this._isDesktop !== newIsDesktop) {
			this._isDesktop = newIsDesktop;
		}
	}

	protected render() {
		const mobileVersion = html`
	<custom-dropdown heading="${this.heading}" customID="${this.customID}"><slot/></custom-dropdown>
`;

		const desktopVersion = html`
	<info-box heading="${this.heading}" customID="${this.customID}"><slot/></info-box>
`;

		return this._isDesktop ? desktopVersion : mobileVersion;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"smart-box": SmartBox;
	}
}
