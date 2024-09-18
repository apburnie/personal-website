<script>
	import { onMount } from 'svelte';
	import Link from '$lib/components/atom/Link.svelte';

	let x = 0;
	let img;

	function decodeEmail(emailString) {
		if (!emailString) return '<div/>';

		try {
			const [firstPT, secondPT] = atob(emailString).toLowerCase().split('@');

			return `<span>${firstPT}</span><!---gahahehanoho--><span style="display: none">agweewgewgewgew</span><span>@</span><span>${secondPT}</span>`;
		} catch {
			return '<div/>';
		}
	}

	onMount(async () => {
		const emailHTML = document.querySelectorAll('#email');

		emailHTML.forEach((email) => {
			if (email === undefined || email.textContent === undefined) {
				email.innerHTML = email.innerHTML;
			}

			email.style.display = 'block';
			email.innerHTML = decodeEmail(email.textContent);
		});

		const p5 = (await import('p5')).default;

		const sketch = (p) => {
			p.preload = () => {
				img = p.loadImage('./assets/worldMap.png');
			};

			p.setup = () => {
				p.createCanvas(230, 230, p.WEBGL);
			};

			p.draw = () => {
				const xRotation = -30;
				const sphereSize = 100;

				const distance = p.dist(p.mouseX, p.mouseY, 100, 100);

				if (distance > 150) {
					x = x + 0.5;
				} else {
					x = x;
				}

				const yRotation = x;

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

<h2>Contact</h2>
<flex-box>
	<div class="Container">
		<div>Email</div>
		<div id="email">YXBidXJuaWVAaG90bWFpbC5jby51aw==</div>

		<div>LinkedIn</div>
		<Link href="https://www.linkedin.com/in/apburnie/" label="linkedin.com/in/apburnie" />
		<div>Reddit</div>
		<Link href="https://www.reddit.com/user/andrewburnie/" label="u/andrewburnie" />
		<div>GitHub</div>
		<Link href="https://github.com/apburnie" label="github.com/apburnie" />
		<div>Telegram and Discord</div>
		<div>apburnie</div>
	</div>

	<div class="Image">
		<div id="p5div" />
	</div>
</flex-box>

<div>Based in London UK, working with a global market</div>

<style>
	.Container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
		margin: auto;
	}

	flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	.Image {
		margin: auto;
	}
</style>
