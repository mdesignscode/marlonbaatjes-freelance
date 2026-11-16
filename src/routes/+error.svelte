<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} · Marlon Baatjes</title>
</svelte:head>

<section class="frame flex min-h-[70svh] flex-col justify-center gap-6 pt-24">
	<h1 class="heading-1 max-w-[680px]">
		{page.status === 404 ? 'That page is not here' : 'Something went wrong'}
	</h1>
	<p class="body-lg max-w-[44ch]">
		{page.status === 404
			? 'The link may be old. The projects and the brief are on the home page.'
			: 'Try again in a moment, or go back to the home page.'}
	</p>
	<a class="btn btn-wide self-start" href="/">Go to the home page</a>
</section>
