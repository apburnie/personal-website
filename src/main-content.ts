import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./components/organism/section-aboutme.ts";
import "./components/organism/section-services.ts";
import "./components/organism/navigation-wrapper.ts";

function setActiveSection(activeSection: string, newSection: string) {
	if (newSection !== activeSection) {
		activeSection = newSection;
		console.log("CHANGED TO", newSection);
	}
}

function convertDevStringToHTML(
	activeSection: string,
	currentSection: string,
	setActiveSection: (oldValue: string, newValue: string) => void,
) {
	return unsafeHTML(
		`<${currentSection} @mouseenter=${setActiveSection(activeSection, currentSection)}/>`,
	);
}

@customElement("main-content")
export class MainContent extends LitElement {
	@state()
	private _activeSection = window.location.hash.slice(1) || "section-aboutme";

	@state()
	private sectionList = ["section-aboutme", "section-services"];

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
  `;

	render() {
		return html`
    <navigation-wrapper activeSection=${this._activeSection}></navigation-wrapper>
    <main>
    ${this.sectionList.map((sectionElement) => convertDevStringToHTML(this._activeSection, sectionElement, setActiveSection))}
    </main>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"main-content": MainContent;
	}
}
