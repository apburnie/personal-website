<script>
	import NavigationDesktop from '$lib/components/molecule/NavigationDesktop.svelte';
	import NavigationMobile from '$lib/components/molecule/NavigationMobile.svelte';

	export let activeSection;
	export let sectionList;
</script>

<header>
	<div class="MobileNav">
		<NavigationMobile {activeSection} {sectionList} />
		<jump-to-contact><a href="#Contact">Contact</a></jump-to-contact>
	</div>

	<div class="DesktopNav">
		<NavigationDesktop {activeSection} {sectionList} />
	</div>
</header>

<style>
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
		padding-bottom: 10px;
		background: none;
		height: 5rem;
	}

	.MobileNav,
	.DesktopNav {
		width: 100%;
		z-index: 3;
		display: block;
	}

	/* Desktop Nav bar present only on larger screens */
	.DesktopNav {
		display: none;
	}

	.MobileNav {
		display: flex;
		justify-content: space-between;
		padding-right: 2vw;
		align-items: center;
	}

	jump-to-contact {
		border: 1px solid #fac79e;
		padding: 0.5rem;
		border-radius: 10px;
		background: black;
	}

	jump-to-contact a {
		text-decoration: none;
		color: #fac79e;
	}

	/* Enforces presence / absence of nav bars */
	@media only screen and (min-width: 1200px) {
		.MobileNav {
			display: none;
		}
		.DesktopNav {
			display: block;
		}
	}
</style>
