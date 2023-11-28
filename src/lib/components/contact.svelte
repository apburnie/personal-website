<script>
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	function decodeEmail(emailString) {
		if (!emailString) return '<div/>';

		try {
			const [firstPT, secondPT] = atob(emailString).toLowerCase().split('@');

			return `<span>${firstPT}</span><!---gahahehanoho--><span style="display: none">agweewgewgewgew</span><span>@</span><span>${secondPT}</span>`;
		} catch {
			return '<div/>';
		}
	}

	onMount(() => {
		const emailHTML = document.querySelectorAll('#email');

		emailHTML.forEach((email) => {
			if (email === undefined || email.textContent === undefined) {
				email.innerHTML = email.innerHTML;
			}

			email.style.display = 'block';
			email.innerHTML = decodeEmail(email.textContent);
		});
	});
</script>

<div class="Container">
	<div>Email</div>
	<div id="email">YXBidXJuaWVAaG90bWFpbC5jby51aw==</div>

	<div>LinkedIn</div>
	<Link href="https://www.linkedin.com/in/apburnie/" label="linkedin.com/in/apburnie/" />
</div>

<style>
	.Container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
	}
</style>
