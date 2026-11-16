<script lang="ts">
	import { kindLabel, shotsOf, type Project } from '#lib/content/projects.ts';

	type Props = { id: string; title: string; intro: string; projects: Project[] };
	let { id, title, intro, projects }: Props = $props();
</script>

<section {id} aria-labelledby="{id}-title" class="pt-24">
	<div class="frame grid gap-6 pb-12 md:grid-cols-12">
		<h2 id="{id}-title" class="heading-2 md:col-span-6" data-reveal>{title}</h2>
		<p
			class="body-lg max-w-[44ch] text-muted md:col-span-5 md:col-start-8"
			data-reveal
			style="--i: 1"
		>
			{intro}
		</p>
	</div>

	{#each projects as project (project.slug)}
		{@const cover = shotsOf(project)[0]}
		<article class="relative h-[82svh] overflow-hidden bg-bg md:h-svh">
			<enhanced:img
				class="absolute inset-0 size-full scale-125 object-cover opacity-50"
				src={cover.picture}
				alt={cover.alt}
				sizes="(min-width: 768px) 125vw, 260vw"
				loading="lazy"
			/>
			<a
				class="row frame absolute inset-x-0 bottom-0 grid grid-cols-2 items-baseline gap-x-6 gap-y-1 bg-bg py-4 no-underline md:top-1/2 md:bottom-auto md:h-24 md:-translate-y-1/2 md:grid-cols-[10%_1fr_auto] md:items-center md:py-0"
				href="/work/{project.slug}"
			>
				<h3 class="heading-5 col-span-2 uppercase md:order-2 md:col-span-1">{project.title}</h3>
				<span class="caption-1 md:order-1">{kindLabel[project.kind]}</span>
				<span class="caption-1 text-right md:order-3">{project.fact}</span>
			</a>
		</article>
	{/each}
</section>

<style>
	.row h3 {
		transition: transform 500ms var(--ease-settle);
	}

	.row:hover h3,
	.row:focus-visible h3 {
		transform: translateX(0.75rem);
	}
</style>
