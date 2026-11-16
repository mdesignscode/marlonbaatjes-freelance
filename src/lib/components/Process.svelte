<script lang="ts">
	import { findProject, shotsOf } from '#lib/content/projects.ts';
	import { steps } from '#lib/content/site.ts';

	// Three screens from the projects below, cropped to three shapes down a diagonal.
	const pick = (slug: string, index: number) => shotsOf(findProject(slug)!)[index];
	const pictures = [pick('spots', 1), pick('trivia-mania', 2), pick('random-stuff', 5)];
</script>

<section id="process" class="frame py-24" aria-labelledby="process-title">
	<div class="grid gap-x-8 gap-y-12 md:grid-cols-12">
		<h2
			id="process-title"
			class="heading-2 md:col-span-6 md:col-start-7 md:row-start-1"
			data-reveal
		>
			How a job runs
		</h2>

		<div class="shot aspect-[3/4] md:col-span-4 md:row-span-2 md:row-start-1" data-reveal>
			<enhanced:img
				class="object-left"
				src={pictures[0].picture}
				alt={pictures[0].alt}
				sizes="(min-width: 768px) 80vw, 220vw"
				loading="lazy"
			/>
		</div>
		<p class="body-lg max-w-[36ch] md:col-span-4 md:col-start-5 md:row-start-2" data-reveal>
			<strong class="font-semibold">{steps[0].lead}</strong>
			{steps[0].text}
		</p>

		<div
			class="shot ml-auto aspect-square w-[62%] md:col-span-3 md:col-start-6 md:row-start-3 md:w-full"
			data-reveal
		>
			<enhanced:img
				src={pictures[1].picture}
				alt={pictures[1].alt}
				sizes="(min-width: 768px) 55vw, 140vw"
				loading="lazy"
			/>
		</div>
		<p class="body-lg max-w-[36ch] md:col-span-4 md:col-start-9 md:row-start-3" data-reveal>
			<strong class="font-semibold">{steps[1].lead}</strong>
			{steps[1].text}
		</p>

		<div
			class="shot aspect-[16/10] w-[78%] md:col-span-5 md:col-start-8 md:row-start-4 md:mt-12 md:w-full"
			data-reveal
		>
			<enhanced:img
				src={pictures[2].picture}
				alt={pictures[2].alt}
				sizes="(min-width: 768px) 42vw, 78vw"
				loading="lazy"
			/>
		</div>
		<p
			class="body-lg max-w-[36ch] md:col-span-4 md:col-start-4 md:row-start-4 md:mt-12"
			data-reveal
		>
			<strong class="font-semibold">{steps[2].lead}</strong>
			{steps[2].text}
		</p>
	</div>
</section>

<style>
	.shot {
		overflow: hidden;
	}

	.shot :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
