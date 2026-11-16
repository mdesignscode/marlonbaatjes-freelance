<script lang="ts">
	import { findProject, kindLabel, shotsOf } from '#lib/content/projects.ts';
	import { hero, site } from '#lib/content/site.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const project = $derived(findProject(data.slug)!);
	const shots = $derived(shotsOf(project));
	const whose = $derived(
		project.kind === 'client'
			? 'Built for a client and shown with their permission.'
			: project.kind === 'concept'
				? 'A concept project for a fictional business, not client work.'
				: 'One of my own projects, not client work.'
	);
</script>

<svelte:head>
	<title>{project.title} · {kindLabel[project.kind]} · {site.name}</title>
	<meta name="description" content={project.summary} />
	<meta property="og:title" content="{project.title} · {site.name}" />
	<meta property="og:description" content={project.summary} />
</svelte:head>

<article class="pt-24">
	<div class="frame grid gap-x-8 gap-y-6 md:grid-cols-12">
		<div class="md:col-span-7">
			<h1 class="heading-1" data-reveal>{project.title}</h1>
			<p class="body-lg mt-6 max-w-[52ch]" data-reveal style="--i: 1">{project.summary}</p>
			<p class="body-3 mt-3 text-muted" data-reveal style="--i: 2">{whose}</p>
		</div>
		<ul
			class="flex flex-wrap items-end gap-6 md:col-span-4 md:col-start-9 md:justify-end"
			data-reveal
			style="--i: 3"
		>
			{#if project.live}
				<li><a class="btn btn-wide" href={project.live.href}>{project.live.label}</a></li>
			{/if}
			{#if project.source}
				<li><a class="link title-3" href={project.source}>Read the source</a></li>
			{/if}
		</ul>
	</div>

	<enhanced:img
		class="mt-12 w-full"
		src={shots[0].picture}
		alt={shots[0].alt}
		sizes="100vw"
		fetchpriority="high"
	/>

	<div class="frame grid gap-x-8 gap-y-12 py-24 md:grid-cols-12">
		<div class="md:col-span-6">
			<h2 class="heading-4" data-reveal>What it is</h2>
			{#each project.story as paragraph, i (i)}
				<p class="body-lg mt-6 max-w-[60ch]" data-reveal>{paragraph}</p>
			{/each}
		</div>
		<div class="md:col-span-5 md:col-start-8">
			<h2 class="heading-4" data-reveal>What it does</h2>
			<ul class="mt-6 flex flex-col gap-0.5">
				{#each project.built as item, i (i)}
					<li class="body-3 bg-surface p-4" data-reveal style="--i: {i}">{item}</li>
				{/each}
			</ul>
			<h2 class="heading-4 mt-12" data-reveal>Built with</h2>
			<p class="body-lg mt-6" data-reveal>{project.stack.join(', ')}</p>
		</div>
	</div>

	{#if shots.length > 1}
		<section aria-labelledby="screens-title">
			<h2 id="screens-title" class="frame heading-4" data-reveal>More screens</h2>
			<ul class="frame mt-6 grid gap-2 md:grid-cols-2">
				{#each shots.slice(1) as shot (shot.picture.img.src)}
					<li data-reveal>
						<enhanced:img
							class="w-full"
							src={shot.picture}
							alt={shot.alt}
							sizes="(min-width: 768px) 50vw, 100vw"
							loading="lazy"
						/>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<div
		class="frame flex flex-col items-start gap-6 pt-24 md:flex-row md:items-center md:justify-between"
	>
		<p class="heading-4 max-w-[24ch]">Need something like this built for your business?</p>
		<div class="flex flex-wrap items-center gap-6">
			<a class="btn btn-wide" href="/#brief">{hero.cta}</a>
			<a class="link title-3" href="/#work">Back to all work</a>
		</div>
	</div>
</article>
