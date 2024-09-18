<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import AboutMe from '$lib/components/organism/AboutMe.svelte';
	import Services from '$lib/components/organism/Services.svelte';
	import Successes from '$lib/components/organism/Successes.svelte';
	import Contact from '$lib/components/organism/Social.svelte';
	import Navigation from '$lib/components/organism/Navigation.svelte';

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
		Successes,
		Contact
	};

	const sectionList = Object.keys(sectionObject);
</script>

<Navigation {activeSection} {sectionList} />

<main>
	{#each sectionList as section}
		<content-container id={section} on:mouseenter={onSection(section)}>
			<svelte:component this={sectionObject[section]} />
		</content-container>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin-top: 5rem;
	}

	content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: transparent;
		font-size: 1.5rem;
		min-height: 100vh;
		width: 98vw;
		padding-left: 5vw;
		padding-right: 5vw;
		flex-grow: 1;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>
