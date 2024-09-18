<script>
	import { convertCamelCaseToSentence } from '$lib/utils.ts';

	export let activeSection;
	export let sectionList;

	let activeIndex;

	$: activeIndex = sectionList.findIndex((el) => el === activeSection);

	let isMenuOpen = false;

	function openCloseMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

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
		<nav aria-label="Main Menu">
			<ul>
				{#each sectionList as section, i}
					<li
						class={`${activeSection === section && 'active'} ${i < activeIndex && 'beforeActive'}`}
					>
						<a
							href={`#${section}`}
							class={activeSection === section && 'active'}
							aria-current={activeSection === section}
							>{convertCamelCaseToSentence(section)}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		padding: 0.5rem;
		width: calc(10rem + 4px);
		height: 2rem;
		cursor: pointer;
		border-radius: 10px;
		background: black;
		color: #00ceff;
		border: 1px solid #00ceff;
		margin-left: 10px;
	}
	button:hover {
		font-weight: bolder;
	}

	button.active {
		font-weight: bolder;
		border-bottom: none;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		background: #00ceff;
		color: #002a33;
	}

	nav {
		width: calc(100vw - 16px);
		margin-left: 10px;
		background: black;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 10px;
	}

	ul {
		width: 100%;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 0;
		margin: 0;
	}

	a {
		font-weight: 200;
		text-decoration: none;
		color: #0dc4f2;
		display: flex;
		align-items: center;
		height: 3rem;
		width: calc(100vw - 20px);
	}

	li.beforeActive {
		border-left: 2px solid #00ccff;
	}

	a:before {
		width: 24px;
		height: 24px;
		content: '';
		display: block;
		border-bottom-left-radius: 50px;
	}

	a.active {
		color: #00ccff;
		font-weight: 500;
		border: 2px solid #00ccff;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 10px;
		background: black;
	}

	a:hover {
		color: #00ceff;
		font-weight: 400;
	}
</style>
