<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

	onMount(async () => {
		const scene = new THREE.Scene();
		const objLoader = new GLTFLoader();
		const camera = new THREE.PerspectiveCamera(30, 314 / 276, 0.1, 1000);
		camera.position.z = 15;
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(314, 276);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
		directionalLight.position.set(0, 1, 1);
		scene.add(directionalLight);

		const controls = new OrbitControls(camera, renderer.domElement);

		document.getElementById('rocketdiv').appendChild(renderer.domElement);

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
					} else {
						model.position.y += -0.01;
					}

					if (model.position.y > 1) {
						shouldIncrease = false;
					}

					if (model.position.y < -1) {
						shouldIncrease = true;
					}

					controls.update();
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
				console.log('An error happened');
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
			<slogan-text>Fast Frontends <rocket-fuel-text>Delivered</rocket-fuel-text></slogan-text>
		</author-slogan>
	</row-one>

	<image-container>
		<div id="rocketdiv" />
	</image-container>

	<text-container>
		<p>My websites have raised USD 310 million</p>
		<p>
			Secure, responsive, low-latency frontends delivered under tight timelines around your needs
		</p>
		<p>Specialist expertise in AI, Cryptoassets and Web3</p>
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

	#p5_loading {
		height: 150px;
	}

	image-container {
		display: flex;
		justify-content: center;
		animation-name: fadeIn;
		animation-duration: 1s;
		animation-iteration-count: 1;
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
		animation-duration: 10s;
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
