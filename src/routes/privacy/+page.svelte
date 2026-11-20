<script lang="ts">
	import { site } from '#lib/content/site.ts';
</script>

<svelte:head>
	<title>Privacy · {site.name}</title>
	<meta name="description" content="What this site does and does not collect." />
</svelte:head>

<article class="frame section-pad">
	<h1 class="heading-1">Privacy</h1>
	<div class="body-lg mt-12 flex max-w-[60ch] flex-col gap-6">
		<p>This site sets no cookies and runs no analytics or advertising scripts.</p>
		<p>
			The project brief on the home page is put together in your browser. Pressing its button opens
			your own email app with the brief filled in. Nothing you type is sent anywhere until you send
			that email yourself.
		</p>
		<p>
			If you email me, I keep your message so that I can reply and do the work. I do not pass it to
			anyone else. Ask me to delete it at
			<a class="link" href="mailto:{site.email}">{site.email}</a> and I will.
		</p>
		<p>
			The site is hosted by Vercel, which keeps standard server logs such as IP addresses for
			security.
		</p>
		<p><a class="link" href="/">Back to the home page</a></p>
	</div>
</article>
