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
	<contact-container>
		<contact-row>
			<contact-label>Email</contact-label>
			<contact-link id="email"> YXBidXJuaWVAaG90bWFpbC5jby51aw== </contact-link>
		</contact-row>

		<contact-row>
			<contact-label>LinkedIn</contact-label>
			<contact-link>
				<Link href="https://www.linkedin.com/in/apburnie/" label="linkedin.com/in/apburnie" />
			</contact-link>
		</contact-row>

		<contact-row>
			<contact-label>Reddit</contact-label>
			<contact-link>
				<Link href="https://www.reddit.com/user/andrewburnie/" label="u/andrewburnie" />
			</contact-link>
		</contact-row>

		<contact-row>
			<contact-label>GitHub</contact-label>
			<contact-link>
				<Link href="https://github.com/apburnie" label="github.com/apburnie" />
			</contact-link>
		</contact-row>

		<contact-row>
			<contact-label>Telegram and Discord</contact-label>
			<contact-link> apburnie </contact-link>
		</contact-row>
	</contact-container>

	<contact-image-container>
		<div id="p5div" />
	</contact-image-container>
</flex-box>

<contact-location>Based in London UK, working with a global market</contact-location>

<style>
	contact-container {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		margin: auto;
		gap: 1rem;
	}

	contact-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	contact-label,
	contact-link {
		width: 295px;
		text-align: center;
	}

	contact-label {
		font-weight: 500;
	}

	flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	contact-image-container {
		margin: auto;
	}

	contact-location {
		text-align: center;
	}

	@media only screen and (min-width: 1200px) {
		contact-label {
			text-align: right;
		}
		contact-link {
			text-align: left;
		}
		contact-row {
			gap: 1rem;
		}
	}
</style>
