<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/atom/Link.svelte';

	import * as THREE from 'three';

	let x = 0;
	let img;

	function decodeEmail(emailString: string): string {
		if (!emailString) return '<div/>';

		try {
			const [firstPT, secondPT] = atob(emailString).toLowerCase().split('@');

			return `<span>${firstPT}</span><!---gahahehanoho--><span style="display: none">agweewgewgewgew</span><span>@</span><span>${secondPT}</span>`;
		} catch {
			return '<div/>';
		}
	}

	onMount(async () => {
		const emailHTML = document.querySelectorAll('#email') as NodeListOf<HTMLElement>;

		emailHTML.forEach((email) => {
			if (email === undefined || email.textContent === undefined) {
				email.innerHTML = email.innerHTML;
			}

			email.style.display = 'block';
			email.innerHTML = decodeEmail(email.textContent!);
		});

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(30, 314 / 276, 0.1, 1000);

		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(314, 276);
		renderer.setAnimationLoop(animate);

		document.getElementById('world')!.appendChild(renderer.domElement);

		const loader = new THREE.TextureLoader();
		let world: null | THREE.Mesh = null;

		const geometry = new THREE.SphereGeometry(0.99, 32, 32);
		const material = new THREE.MeshBasicMaterial({ color: '#00151a' });
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		loader.load('/assets/worldMap.png', function (texture: THREE.Texture) {
			const geometry = new THREE.SphereGeometry(1, 32, 32);
			const material = new THREE.MeshBasicMaterial({
				map: texture,
				transparent: true
			});
			world = new THREE.Mesh(geometry, material);

			world.rotation.x += 0.5;
			scene.add(world);
		});

		camera.position.z = 5;

		function animate() {
			if (world !== null) {
				world.rotation.y += 0.005;
			}
			renderer.render(scene, camera);
		}
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
			<contact-label>GitHub</contact-label>
			<contact-link>
				<Link href="https://github.com/apburnie" label="github.com/apburnie" />
			</contact-link>
		</contact-row>

		<contact-row>
			<contact-label>Telegram </contact-label>
			<contact-link>
				<Link href="https://t.me/apburnie" label="@apburnie" />
			</contact-link>
		</contact-row>

		<contact-row>
			<contact-label>Discord</contact-label>
			<contact-link> apburnie </contact-link>
		</contact-row>
	</contact-container>

	<img src="/assets/profileLarge.png" alt="Andrew Burnie " />
	<contact-image-container>
		<div id="world" />
	</contact-image-container>
</flex-box>

<contact-location>Based in London UK, working with a global market</contact-location>

<style>
	img {
		height: 20vh;
		width: 20vh;
		margin: auto;
	}

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
	}

	contact-label {
		font-weight: 500;
	}

	flex-box {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
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
