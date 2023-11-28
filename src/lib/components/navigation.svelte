<script>
	import { convertCamelCaseToSentence } from '$lib/utils.ts';

	export let activeSection;

	let activeIndex;

	const sectionList = ['AboutMe', 'Services', 'PastProjects', 'Contact'];

	$: activeIndex = sectionList.findIndex((el) => el === activeSection);
</script>

<aside
	on:mouseenter={() => {
		document.body.style.overflow = 'hidden';
	}}
	on:mouseleave={() => {
		document.body.style.overflow = 'visible';
	}}
>
	<nav aria-label="Main Menu">
		<ul>
			{#each sectionList as section, i}
				<li>
					<a
						href={`#${section}`}
						class={`${activeSection === section && 'active'} ${i < activeIndex && 'beforeActive'}`}
						aria-current={activeSection === section}
						>{convertCamelCaseToSentence(section)}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	aside {
		z-index: 4;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 0;
		margin: 0;
	}

	a {
		font-weight: 400;
		text-decoration: none;
		color: #45474d;
		display: flex;
		gap: calc(0.5rem + 12px);
		align-items: center;
		height: 3rem;
		width: 10rem;
	}

	a:before {
		width: 12px;
		background: transparent;
		height: 3rem;
		content: '';
		display: block;
	}

	a.beforeActive:before {
		width: 12px;
		background: #1f6666;
		height: 3rem;
		content: '';
		display: block;
	}

	a.active:before {
		width: 24px;
		height: 24px;
		content: '';
		display: block;
		border-bottom-left-radius: 50px;
	}

	.active {
		color: #103b84;
		font-weight: 700;
		border: 3px solid #1f6666;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 25px;
		padding-right: 10px;
		gap: 0.5rem;
	}

	a:hover {
		color: #103b84;
		font-weight: 700;
	}
</style>
