<script>
	import Client from '$lib/components/Client.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Client author="html_compile" id="htmlCompile"
	><p>
		I used metaprogramming and macros to create an open-source template engine for generating HTML
		strings within Rust for use with static websites. This has 5 stars on GitHub: <Link
			href="https://github.com/apburnie/html_compile"
			label="github.com/apburnie/html_compile"
		/>
	</p>
</Client>

<Client author="August (previously called Fractal)" id="Fractal"
	><p>
		Building dashboards that enable deposits and withdrawals in a variety of ERC-20 tokens across
		multiple EVM-compatible Blockchains. August has raised USD 6 million in seed funding.
	</p>
</Client>

<Client author="Mysten Labs Sui Explorer" id="mystenLabs"
	><p>
		<span>This </span>
		<Link
			href="https://github.com/MystenLabs/sui/tree/main/apps/explorer"
			label="opensource codebase"
		/>
		<span> enables users to observe activity on the Sui Network at </span>
		<Link href="https://suiexplorer.com" label="suiexplorer.com" />. Mysten Labs raised USD 300
		million in funding
	</p>
</Client>

<Client author="Mattereum Asset Passports" id="mattereum">
	<p>
		Created website UIs to explain NFTs that store provenance on real-world physical items to
		OpenSea customers. Also built TypeScript Node.js CLI tools for the Ontology Team
	</p>
</Client>

<Client author="Wluper Conversational AI Assistant UI" id="wluper">
	<p>Created the Conversational AI Assistant UI which led to a contract with Ocado</p>
</Client>

<Client author="WAGMI Advisers" id="wagmiAdvisers">
	<p>
		Provided an end-to-end service for Wagmi Advisers, a select group of practitioners at
		gunnercooke who specialise in advising on blockchain, Web3 and cryptoassets. This involved
		creating their website in Svelte, deploying to netlify (see <Link
			href="https://wagmiadvisers.xyz/"
			label="wagmiadvisers.xyz"
		/>) and designing the brand using GIMP and Inkscape.
	</p>
	<img src="/assets/wagmiAdvisers.svg" style="height: 5rem;" alt="WAGMI Advisers Logo" />
</Client>

<Client author="Ocean Builder" id="oceanBuilder">
	<p>
		This project shows how WebGL can be used with React to create 3D immersive experiences. For
		further details, see{' '}
		<Link href="https://github.com/apburnie/ocean-builder" label="GitHub" />
		The following image is an example 3D model built using the tool:
	</p>

	<img
		src="/assets/oceanBuilder.png"
		style="height: 10rem;"
		alt="example built using ocean builder"
	/>
</Client>

<a href="https://github.com/apburnie" target="_blank" rel="noreferrer" class="GitHubLink"
	>See GitHub for more examples →</a
>

<style>
	.GitHubLink {
		text-decoration: none;
		padding: 0.5rem;
		margin: 0.5rem;
		border: 1px solid #41364d;
		color: #41364d;
		background-image: linear-gradient(to right, white, #f6f5ef 50%, white 80%, #f6f5ef 100%);
	}

	.GitHubLink:hover {
		background: #4dff53;
	}
</style>
