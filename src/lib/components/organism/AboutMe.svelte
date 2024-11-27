<script lang="ts">
	import { onMount } from 'svelte';

	let rocket;
	let star;

	let starData = [];

	function randomInteger(minV, maxV) {
		return Math.floor(Math.random() * (maxV - minV) + minV);
	}

	onMount(async () => {
		const SPEED = 20;
		const WIDTH = Math.min(Math.floor(window.innerWidth * 0.9), 750);
		const HEIGHT = Math.floor(WIDTH / 3);

		const STAR_DIM = Math.floor((WIDTH / 75) * 1.5);

		// Max number of stars created in column
		const STAR_NO = 10;

		// Frequency of star creation
		const STAR_FREQ = 5;

		// Time takes for Rocket to emerge
		const ROCKET_TIME = 1000;

		// Padding
		const ROCKET_PADDING = 0.2;

		// Rocket Position
		const ROCKET_X = WIDTH * (ROCKET_PADDING / 2);
		const ROCKET_Y = (HEIGHT * ROCKET_PADDING) / 2;

		const ROCKET_X_START = (WIDTH - ROCKET_X) / 2;
		const ROCKET_Y_START = (HEIGHT - ROCKET_Y) / 2;

		let t = 0;
		let noStars = 0;

		const p5 = (await import('p5')).default;

		const sketch = (p) => {
			p.preload = () => {
				rocket = p.loadImage('./assets/rocket/rocket.svg');
				star = p.loadImage('./assets/rocket/star.svg');
			};

			p.setup = () => {
				p.createCanvas(WIDTH, HEIGHT);
			};

			p.draw = () => {
				t += 1;

				// 1)  Move Existing Stars

				starData = starData.map(({ x, y }) => ({ x: x - SPEED, y }));

				// 2) Remove Stars that are out of view

				starData = starData.filter(({ x }) => x > STAR_DIM);

				// 3) Create New Stars

				if (t % STAR_FREQ === 0) {
					noStars = randomInteger(0, STAR_NO);

					let n = 0;

					while (n <= noStars) {
						const newStarHeight = randomInteger(0, HEIGHT - STAR_DIM);

						starData.push({
							x: randomInteger(WIDTH - 5 * STAR_DIM, WIDTH - STAR_DIM),
							y: newStarHeight
						});

						n += 1;
					}
				}

				p.clear();

				starData.forEach((point) => {
					p.drawingContext.shadowColor = '#e0e3eb';
					p.drawingContext.shadowBlur = 10;
					p.image(star, point.x, point.y, STAR_DIM, STAR_DIM);
				});

				p.drawingContext.shadowBlur = 0;
				if (t < ROCKET_TIME) {
					const xCoord = ROCKET_X_START + (t / ROCKET_TIME) * (ROCKET_X - ROCKET_X_START);
					const yCoord = ROCKET_Y_START + (t / ROCKET_TIME) * (ROCKET_Y - ROCKET_Y_START);

					p.image(
						rocket,
						xCoord,
						yCoord,
						((WIDTH * (1 - ROCKET_PADDING)) / ROCKET_TIME) * t,
						((HEIGHT * (1 - ROCKET_PADDING)) / ROCKET_TIME) * t
					);
				} else {
					p.image(
						rocket,
						ROCKET_X,
						ROCKET_Y,
						WIDTH * (1 - ROCKET_PADDING),
						HEIGHT * (1 - ROCKET_PADDING)
					);
				}
			};
		};

		new p5(sketch, 'rocketdiv');
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

	<div id="p5_loading" />
	<div id="rocketdiv" />

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
	}

	author-slogan {
		display: flex;
		flex-direction: column;
		align-items: end;
		font-size: 2rem;
		position: relative;
		animation-name: shiftRight;
		animation-duration: 3s;
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
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	text-container {
		margin: auto;
		animation-name: fadeIn;
		animation-duration: 6s;
		animation-iteration-count: 1;
		text-align: center;
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
		animation-duration: 6s;
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
