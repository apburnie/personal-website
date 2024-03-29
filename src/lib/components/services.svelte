<script>
	import { onMount } from 'svelte';

	let x = 0;
	let img;

	onMount(async () => {
		const p5 = (await import('p5')).default;

		const sketch = (p) => {
			p.preload = () => {
				img = p.loadImage('./assets/worldMap.png');
			};

			p.setup = () => {
				p.createCanvas(230, 230, p.WEBGL);
			};

			p.draw = () => {
				x = x + 0.5;
				const yRotation = x;
				const xRotation = -30;
				const sphereSize = 100;

				p.angleMode(p.DEGREES);
				p.background(255, 1);
				p.directionalLight(255, 255, 255, 0, 0, -10);
				p.ambientLight(100);
				p.push();
				p.rotateX(xRotation);
				p.rotateY(yRotation);
				p.noStroke();
				p.fill('#406080');
				p.sphere(sphereSize);
				p.pop();

				p.push();
				p.rotateX(xRotation);
				p.rotateY(yRotation);
				p.noStroke();
				p.texture(img);
				p.sphere(sphereSize);
				p.pop();
			};
		};

		new p5(sketch, 'p5div');
	});
</script>

<div class="Container">
	<div class="Text">
		<div>Here are some of the technologies I&apos;ve used:</div>
		<div>
			<h3>Frontend</h3>
			<div>CSS, SASS, Tailwind and CSS-in-JS</div>
			<div>JavaScript, TypeScript and WebAssembly</div>
			<div>React, Svelte and Vue</div>
			<div>Semantic HTML and Design (Figma)</div>
			<div>Visualizations and animations (D3.js / WebGL)</div>
			<div>EVM-compatible blockchains (ethers.js, wagmi and viem)</div>
		</div>
		<div>
			<h3>Backend</h3>
			<div>SQL and NoSQL</div>
			<div>REST, RPC, GraphQL and JSON APIs</div>
			<div>Rust, Node.js and Python</div>
		</div>
	</div>

	<div class="Image">
		<div id="p5div" />
		<div class="Attribution">
			<div>Source for world map:</div>
			<a href="https://commons.wikimedia.org/wiki/File:World_map_blank_without_borders.svg"
				>Crates</a
			>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia
			Commons
		</div>
	</div>
</div>

<style>
	.Image {
		margin: auto;
	}

	.Container {
		display: flex;
		flex-wrap: wrap;
		padding: 1rem;
		max-width: 80vw;
	}

	.Text {
		margin: auto;
	}

	.Text div div {
		padding-left: 1rem;
	}

	.Attribution {
		font-size: 0.75rem;
		color: #455454;
	}
</style>
