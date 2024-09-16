<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import AboutMe from '$lib/components/aboutMe.svelte';
	import Services from '$lib/components/services.svelte';
	import PastProjects from '$lib/components/pastprojects.svelte';
	import Contact from '$lib/components/contact.svelte';

	import Navigation from '$lib/components/Navigation/index.svelte';

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
</script>

<Navigation {activeSection} {sectionList} />

<main>
	{#each sectionList as section}
		<div class="Content" id={section} on:mouseenter={onSection(section)}>
			<div class="Content">
				<svelte:component this={sectionObject[section]} />
			</div>
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin-top: 5rem;
	}

	.Content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: transparent;
		color: white;
		font-size: 1.5rem;
		height: calc(100vh - 5rem);
		width: 99vw;
		flex-grow: 1;
	}
</style>
