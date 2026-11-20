<script lang="ts">
	import { site } from '#lib/content/site.ts';
</script>

<section id="contact" class="bg-cobalt text-white" aria-labelledby="contact-title">
	<div class="frame flex flex-wrap items-center justify-between gap-5 pb-12">
		<h2 id="contact-title" class="heading-4">Prefer to email me directly?</h2>
		<a class="link break-all" href="mailto:{site.email}">{site.email}</a>
	</div>
</section>
