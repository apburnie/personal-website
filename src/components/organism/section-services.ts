import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./smart-box";

@customElement("section-services")
export class SectionServices extends LitElement {
	static styles = css`
category-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: start;
		justify-content: center;
	}

	category-container p,
	category-container h4 {
		margin: 0.25rem;
		line-height: 1.5;
		font-size: 1.25rem;
	}

h2 {
text-align: center;
}

	  `;

	render() {
		return html`
<services-container>
<h2>Services</h2>

	<p>
		I build fast, beautiful websites that work from smartphones to desktop and that interact with
		any blockchain or database under tight deadlines with the following leading-edge technologies:
	</p>
<category-container>
	<smart-box heading="Macro: Layout and Architecture" customID="macro">
		<p>React, Svelte, Vue.js and HTML</p>
		<p>Vite and Next.js</p>
		<p>TypeScript, JavaScript and WebAssembly</p>
		<p>End-to-end and Unit Testing</p>
		<p>Atomic Design System</p>
	</smart-box>

	<smart-box heading="Meso: Reusable, Modular Components" customID="meso">
		<p>CSS, CSS-in-JS and utility classes</p>
		<p>Tailwind and styled-components</p>
		<p>D3.js and WebGL</p>
		<p>Design with Figma, GIMP and Inkscape</p>
	</smart-box>

	<smart-box heading="Micro: Event Handling and Transactions" customID="micro">
		<h4>Blockchain Tx</h4>
		<p>ethers.js / Viem / wagmi</p>
		<h4>SQL and noSQL CRUD</h4>
		<p>Fetch and Websockets API</p>
		<p>REST / RPC / GraphQL</p>
	</smart-box>
</category-container>
</services-container>
          `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"section-services": SectionServices;
	}
}
