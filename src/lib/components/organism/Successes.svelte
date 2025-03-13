<script lang="ts">
	import SmartBox from '$lib/components/organism/SmartBox.svelte';
	import Link from '$lib/components/atom/Link.svelte';
</script>

<h2>Successes</h2>
<div>
	<p>Here are some recent successes:</p>
</div>

<category-container>
	<SmartBox heading="Mysten Labs raised USD 300 million" id="mysten">
		<span
			>I built the initial Sui Explorer in under a month. Utilizing this, Mysten Labs raised</span
		>
		<Link
			href="https://www.wsj.com/articles/crypto-startup-mysten-labs-raises-300-million-in-ftx-led-round-11662609293"
			label="USD 300 million"
		/>.
		<span
			>The codebase is <Link
				href="https://github.com/MystenLabs/sui/tree/devnet-0.21.0/apps/explorer"
				label="open-source"
			/> and the website is at</span
		>
		<Link href="https://suiexplorer.com" label="suiexplorer.com" />.
	</SmartBox>

	<SmartBox heading="html_compile 5 stars on GitHub" id="html_compile">
		<span
			>I used metaprogramming and macros to create an open-source template engine for generating
			HTML strings within Rust. This has had more than 2800 downloads and has 5 stars on GitHub:</span
		>
		<Link href="https://crates.io/crates/html_compile" label="crates.io/crates/html_compile" />.
	</SmartBox>

	<SmartBox heading="August raised USD 16 million" id="august">
		<span
			>I built <Link href="https://platform.augustdigital.io" label="trading interfaces" /> that enable
			deposits and withdrawals in a DeFi lending protocol across EVM-compatible Blockchains</span
		>. August (previously Fractal) raised
		<Link
			href="https://www.bloomberg.com/news/videos/2023-04-17/on-chain-finance-startup-fractal-s-6m-seed-raise-video"
			label="USD 6 million"
		/> in seed funding and <Link
			href="https://fortune.com/crypto/2025/03/06/crypto-prime-brokerage-august-raises-10-million-dragonfly-ventures/"
			label="USD 10 million"
		/> in a Series A.
		<span>This uses a confidential codebase</span>
	</SmartBox>
</category-container>
<a href="https://github.com/apburnie" target="_blank" rel="noreferrer" class="GitHubLink"
	>See GitHub for more examples →</a
>

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
	.GitHubLink {
		text-decoration: none;
		padding: 0.5rem;
		margin: 0.5rem;
		border: 1px solid #41364d;
		color: #41364d;
		background: #d9f2eb;
		font-weight: 700;
	}

	.GitHubLink:hover {
		background: #00ffb9;
	}
</style>
