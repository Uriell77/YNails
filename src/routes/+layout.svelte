<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/css/app.css';
	import '../lib/js/app.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="main">
{@render children()}
</main>
<Footer />



<style>
</style>