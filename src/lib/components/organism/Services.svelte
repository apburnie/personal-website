<script lang="ts">
	import SmartBox from '$lib/components/organism/SmartBox.svelte';
</script>

<h2>Services</h2>

<div>
	<p>
		I build fast, beautiful websites that work from smartphones to desktop and that interact with
		any blockchain or database under tight deadlines with the following leading-edge technologies:
	</p>
</div>
<category-container>
	<SmartBox heading="Macro: Layout and Architecture" id="macro">
		<p>React, Svelte, Vue.js and HTML</p>
		<p>Vite and Next.js</p>
		<p>TypeScript, JavaScript and WebAssembly</p>
		<p>End-to-end and Unit Testing</p>
		<p>Atomic Design System</p>
	</SmartBox>

	<SmartBox heading="Meso: Reusable, Modular Components" id="meso">
		<p>CSS, CSS-in-JS and utility classes</p>
		<p>Tailwind and styled-components</p>
		<p>D3.js and WebGL</p>
		<p>Design with Figma, GIMP and Inkscape</p>
	</SmartBox>

	<SmartBox heading="Micro: Event Handling and Transactions" id="micro">
		<h4>Blockchain Tx</h4>
		<p>ethers.js / Viem / wagmi</p>
		<h4>SQL and noSQL CRUD</h4>
		<p>Fetch and Websockets API</p>
		<p>REST / RPC / GraphQL</p>
	</SmartBox>
</category-container>

<style>
	category-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: start;
		width: 99vw;
		justify-content: center;
	}

	category-container p,
	category-container h4 {
		margin: 0.25rem;
		line-height: 1.5;
		font-size: 1.25rem;
	}
</style>
