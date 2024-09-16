<script>
	import { convertCamelCaseToSentence } from '$lib/utils.ts';

	export let activeSection;
	export let sectionList;

	let activeIndex;

	$: activeIndex = sectionList.findIndex((el) => el === activeSection);
</script>

<nav aria-label="Main Menu">
	<ul>
		{#each sectionList as section, i}
			<li class={`${activeSection === section && 'active'} ${i < activeIndex && 'beforeActive'}`}>
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

<style>
	nav {
		width: 100%;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: saturate(180%) blur(10px);
	}

	ul {
		width: 100%;
		list-style-type: none;
		display: flex;
		flex-direction: row;
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
		width: 10rem;
		margin-left: auto;
		margin-right: 1rem;
	}

	li {
		flex-grow: 1;
	}

	li.beforeActive {
		background: #ff9d0033;
	}

	li.active {
		background-image: linear-gradient(to right, #ff9d0033, #ff9d00 50%, transparent 88%);
	}

	a:before {
		width: 2rem;
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
		border-top-right-radius: 25px;
		padding-right: 10px;
		gap: 0.5rem;
		background: black;
	}

	a:hover {
		color: #00ceff;
		font-weight: 400;
	}
</style>
