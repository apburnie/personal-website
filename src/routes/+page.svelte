<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import AboutMe from '$lib/components/aboutMe.svelte';
	import Services from '$lib/components/services.svelte';
	import PastProjects from '$lib/components/pastprojects.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Logo from '$lib/components/logo.svelte';

	import Navigation from '$lib/components/navigation.svelte';

	import { convertCamelCaseToSentence } from '$lib/utils.ts';

	let activeSection = 'aboutMe';

	$: activeSection = $page.url.hash.slice(1) || 'aboutMe';

	const onSection = (sectionName) => () => {
		if (sectionName !== activeSection) {
			goto(`#${sectionName}`, { replaceState: true, noScroll: true });
			activeSection = sectionName;
		}
	};

	const sectionObject = {
		AboutMe,
		Services,
		PastProjects,
		Contact
	};

	const sectionList = Object.keys(sectionObject);

	let isMenuOpen = false;

	function openCloseMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<Logo />
	<div class="MobileNavContainer">
		<button
			on:click={openCloseMenu}
			class={isMenuOpen && 'active'}
			type="button"
			aria-label={isMenuOpen ? 'Close Main Menu' : 'Open Main Menu'}
			aria-expanded={isMenuOpen}
			aria-haspopup="menu"
		>
			{isMenuOpen ? 'Close Menu' : 'Open Menu'}
		</button>
		{#if isMenuOpen}
			<div class="MobileNav">
				<Navigation {activeSection} />
			</div>
		{/if}
	</div>

	<div class="DesktopNav">
		<Navigation {activeSection} />
	</div>
</header>

<main>
	<div id="HomePageContainer">
		{#each sectionList as section}
			<div id={section} on:mouseenter={onSection(section)}>
				<div class="Placeholder" />
				<div class="Content">
					<h2>{convertCamelCaseToSentence(section)}</h2>
					<svelte:component this={sectionObject[section]} />
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	/* Main Content */
	#HomePageContainer > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;
		position: relative;
		z-index: 1;
		padding: 1rem;
	}

	#HomePageContainer > div > div {
		overflow: auto;
	}

	.Placeholder {
		width: 25rem;
		height: calc(10vh + 2rem + 5px + 3rem);
		visibility: hidden;
	}

	.Content {
		width: 50rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
		background-image: linear-gradient(to right, #cfe6e6, #daf2f2 100%);
		border-radius: 10px;
		color: #0c1a1a;
		box-shadow: 1px 1px #738080, 2px 2px #738080, 3px 3px #738080, 4px 4px #738080, 5px 5px #738080,
			6px 6px #738080, 7px 7px #738080, 8px 8px #738080, 9px 9px #738080, 10px 10px #738080;
	}

	/* Header */

	header {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		position: fixed;
		top: 0;
		align-items: center;
		justify-content: start;
		z-index: 2;
		background-image: linear-gradient(to right, #408080, #408080 50%, #406080 80%, #406080 100%);
		padding-bottom: 10px;
	}

	/* Mobile Nav bar present only on smaller screens */

	.MobileNavContainer {
		position: relative;
		right: 0;
		height: 2rem;
		width: 100vw;
	}

	.MobileNavContainer button {
		display: flex;
		border: none;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		padding: 0.5rem;
		color: black;
		width: 10rem;
		height: 2rem;
		text-align: center;
		box-shadow: 1px 1px #738080, 2px 2px #738080, 3px 3px #738080, 4px 4px #738080, 5px 5px #738080;
		position: relative;
		border-radius: 5px;
		cursor: pointer;
		border-radius: 10px;
		color: #0c1a1a;
		margin-left: 10px;
		background: #cfdae6;
	}
	.MobileNavContainer button:hover {
		font-weight: bolder;
		box-shadow: 1px 1px #738080, 2px 2px #738080, 3px 3px #738080, 4px 4px #738080;
		bottom: -1px;
		left: 1px;
	}

	.MobileNavContainer button.active {
		font-weight: bolder;
		border-left: none;
		border-bottom: none;
		bottom: -5px;
		left: 5px;
		box-shadow: none;
		color: black;
		background: #cfdae6;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	.MobileNav {
		position: fixed;
		border-radius: 15px;
		border-top-left-radius: 0px;
		left: 5px;
		width: calc(100vw - 30px);
		background: #cfdae6;
		margin-left: 10px;
	}

	/* Desktop Nav bar present only on larger screens */

	.DesktopNav {
		position: fixed;
		left: 0;
		top: calc(10vh + 2rem + 5px + 1rem);
		width: 24rem;
		z-index: 3;
		display: none;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		padding: 1rem;
		background: #cfdae6;
	}

	/* Enforces presence / absence of nav bars */

	@media only screen and (min-width: 1200px) {
		.MobileNavContainer {
			display: none;
		}
		.DesktopNav {
			display: block;
		}

		header {
			background-image: none;
		}

		#HomePageContainer > div {
			min-height: 100vh;
		}
	}
</style>
