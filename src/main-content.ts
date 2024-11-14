import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./components/organism/section-aboutme.ts";
import "./components/organism/section-services.ts";
import "./components/organism/navigation-wrapper.ts";

@customElement("main-content")
export class MainContent extends LitElement {
	@state()
	private _activeSection = window.location.hash.slice(1) || "section-aboutme";

	@state()
	private sectionList = ["section-aboutme", "section-services"];

	protected _setActiveSection(newSection: string) {
		if (newSection !== this._activeSection) {
			this._activeSection = newSection;
			console.log("CHANGED TO", newSection);
		}
	}

	protected _convertDevStringToHTML(currentSection: string) {
		return unsafeHTML(
			`<content-container @mouseover="${() => this._setActiveSection(currentSection)}" name="${currentSection}" ><${currentSection} /></content-container>`,
		);
	}

	static styles = css`
main {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: transparent;
		font-size: 1.5rem;
		min-height: 100vh;
		width: 98vw;
		padding-left: 5vw;
		padding-right: 5vw;
		flex-grow: 1;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
                margin-top: 5rem;
	}
content-container {
display: flex;
align-items: center;
flex-direction: column;
height: 100vh;
flex-grow: 1;
justify-content: space-between;
}
  `;

	render() {
		return html`
    <navigation-wrapper activeSection="${this._activeSection}"></navigation-wrapper>
    <main>
    ${this.sectionList.map((sectionElement) => this._convertDevStringToHTML(sectionElement))}
    </main>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"main-content": MainContent;
	}
}
