<script lang="ts">
	import { hero, site } from '#lib/content/site.ts';
</script>

<section
	id="contact"
	class="relative mt-24 min-h-[70svh] md:min-h-svh"
	aria-labelledby="contact-title"
>
	<enhanced:img
		class="absolute inset-0 size-full object-cover object-left-top opacity-70"
		src="#lib/assets/work/spots/4.png"
		alt="Spots web screen with one search result opened to show its video resolutions"
		sizes="100vw"
		loading="lazy"
	/>
	<div class="frame relative flex justify-end pt-[45svh] md:pt-16">
		<div class="w-full bg-paper p-8 text-paper-ink md:w-[380px]" data-reveal>
			<h2 id="contact-title" class="heading-4 font-normal">Tell me what you need</h2>
			<dl class="body-3 mt-6 flex flex-col gap-2">
				<div class="flex justify-between gap-4">
					<dt>Email</dt>
					<dd><a class="link break-all" href="mailto:{site.email}">{site.email}</a></dd>
				</div>
				<div class="flex justify-between gap-4">
					<dt>Where</dt>
					<dd>South Africa, UTC+2</dd>
				</div>
				<div class="flex justify-between gap-4">
					<dt>Languages</dt>
					<dd>English, Afrikaans</dd>
				</div>
			</dl>
			<a class="btn mt-8 w-full" href="#brief">{hero.cta}</a>
		</div>
	</div>
</section>
