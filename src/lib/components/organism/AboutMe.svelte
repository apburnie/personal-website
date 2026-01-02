<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	onMount(async () => {
		const scene = new THREE.Scene();
		const objLoader = new GLTFLoader();
		const camera = new THREE.PerspectiveCamera(30, 2, 0.1, 1000);
		camera.position.z = 15;
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(560, 280);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
		directionalLight.position.set(0, 1, 1);
		scene.add(directionalLight);

		const NO_STARS = 10;

		const star_s = Array(NO_STARS)
			.fill(null)
			.map(() => new THREE.PointLight(0xffffff, 100, 0));

		const star_x_s = Array(NO_STARS)
			.fill(null)
			.map((x, i) => -9 + i);
		const star_y_s = star_s.map(() => Math.floor(Math.random() * 10) - 5);

		star_s.forEach((x, i) => {
			const sphere_g = new THREE.SphereGeometry(0.1, 16, 32);
			const sphere_m = new THREE.MeshBasicMaterial({ color: 0xffffff });
			const sphere = new THREE.Mesh(sphere_g, sphere_m);

			x.position.set(star_x_s[i], star_y_s[i], 0);
			x.add(sphere);
			scene.add(x);
		});

		const light = new THREE.PointLight(0xff0000, 100, 0);
		light.position.set(4, 0, -3);
		scene.add(light);

		document.getElementById('rocketdiv')!.appendChild(renderer.domElement);

		objLoader.load(
			// resource URL
			'/assets/fire.glb',
			// called when resource is loaded
			async function (gltf) {
				const model = gltf.scene;

				await renderer.compileAsync(model, camera, scene);
				model.rotation.y = -Math.PI / 3;
				model.position.z += 1;

				light.add(model);
			},
			// called when loading is in progress
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			// called when loading has errors
			function (error) {
				console.log('Error loading Fire Object', error);
			}
		);

		objLoader.load(
			// resource URL
			'/assets/Rocket.glb',
			// called when resource is loaded
			async function (gltf) {
				const model = gltf.scene;

				model.rotation.y = Math.PI;
				model.rotation.x = Math.PI / 2;
				model.rotation.z = -Math.PI / 3;

				model.position.x = 0;
				model.position.y = 0;

				await renderer.compileAsync(model, camera, scene);

				scene.add(model);

				renderer.setAnimationLoop(animate);

				let shouldIncrease = true;

				function animate() {
					if (shouldIncrease) {
						model.position.y += 0.01;
						light.position.y += 0.01;
					} else {
						model.position.y += -0.01;
						light.position.y += -0.01;
					}

					if (model.position.y > 0.5) {
						shouldIncrease = false;
					}

					if (model.position.y < -0.5) {
						shouldIncrease = true;
					}

					star_s.forEach((x, i) => {
						star_x_s[i] = star_x_s[i] < 10 ? star_x_s[i] + 1 : -9;
						star_y_s[i] = star_x_s[i] < 10 ? star_y_s[i] : star_y_s[i] > -5 ? star_y_s[i] - 1 : 5;

						x.position.set(star_x_s[i], star_y_s[i], -5);
					});

					renderer.render(scene, camera);
				}

				animate();
			},
			// called when loading is in progress
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			// called when loading has errors
			function (error) {
				console.log('Error occurred loading Rocket', error);
			}
		);
	});
</script>

<aboutme-container>
	<row-one>
		<profile-container>
			<img src="/assets/profileLarge.png" alt="Andrew Burnie" />
		</profile-container>
		<author-slogan>
			<author-name>Andrew Burnie</author-name>
			<slogan-text
				>Mission-critical Websites <rocket-fuel-text>Delivered</rocket-fuel-text></slogan-text
			>
		</author-slogan>
	</row-one>

	<image-container>
		<div id="rocketdiv" />
	</image-container>

	<text-container>
		<p>
			Supporting companies through USD 310 million in funding rounds and USD 1 billion in
			transactions
		</p>
		<p>TypeScript - Python - UI/UX Design</p>
	</text-container>
</aboutme-container>

<style>
	rocket-fuel-text {
		display: inline;
		background: linear-gradient(to right, #f0bb47ff, #ff8573);
		color: transparent;
		background-clip: text;
	}

	row-one {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80vw;
		flex-wrap: wrap-reverse;
		margin: auto;
		gap: 2rem;
		animation-name: fadeIn;
		animation-duration: 3s;
		animation-iteration-count: 1;
	}

	image-container {
		display: flex;
		justify-content: center;
		border: 5px solid black;
		background: black;
		max-width: 90vw;
		width: 560px;
		overflow: hidden;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		border-radius: 50% 20% 20% 50%;
		position: relative;
		right: 0;
		animation-name: rocketMove;
		animation-duration: 10s;
		animation-iteration-count: 1;
	}

	@keyframes rocketMove {
		0% {
			left: 100vw;
		}
		50% {
			left: 100vw;
		}
		89% {
			left: -2vw;
		}
		100% {
			left: 0;
		}
	}

	author-slogan {
		display: flex;
		flex-direction: column;
		align-items: end;
		font-size: 2rem;
		position: relative;
		animation-name: shiftRight;
		animation-duration: 5s;
		animation-iteration-count: 1;
	}

	author-name {
		font-weight: 700;
		text-align: end;
	}

	slogan-text {
		font-weight: 600;
		text-align: end;
	}

	aboutme-container {
		align-items: center;
	}

	text-container {
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 20s;
		animation-iteration-count: 1;
		text-align: center;
	}

	text-container p {
		margin: 0;
		line-height: 1.5;
	}

	profile-container {
		margin-left: auto;
	}

	profile-container img {
		border-style: solid;
		border-radius: 150px;
		background-image: linear-gradient(to bottom, #d4ce91, #c7c06d);
		height: 5rem;
		width: 5rem;
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 8s;
		animation-iteration-count: 1;
	}

	@media only screen and (min-width: 1200px) {
		author-slogan {
			font-size: 5rem;
			width: fit-content;
			text-align: right;
		}

		profile-container img {
			height: 10rem;
			width: 10rem;
		}
	}

	@keyframes shiftRight {
		0% {
			left: -100vw;
			font-style: oblique -20deg;
		}
		89% {
			left: 2vw;
			font-style: normal;
		}
		100% {
			left: 0;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
