<script lang="ts">
	import { findProject, kindLabel, shotsOf } from '#lib/content/projects.ts';
	import { hero, site } from '#lib/content/site.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const project = $derived(findProject(data.slug)!);
	const shots = $derived(shotsOf(project));
	const showcasePath = $derived(`/showcases/${project.slug}/brag`);
	const galleryShots = $derived(project.showcase ? shots : shots.slice(1));
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

<article>
	<div class="frame pt-8">
		<a class="link caption-1 text-link" href="/#work">Back to selected work</a>
	</div>
	<div class="frame grid gap-x-8 gap-y-6 pt-9 md:grid-cols-12">
		<div class="md:col-span-7">
			<h1 class="heading-1">{project.title}</h1>
			<p class="body-lg mt-6 max-w-[52ch]" style="--i: 1">{project.summary}</p>
			<p class="mt-3 text-muted" style="--i: 2">{whose}</p>
		</div>
		<ul class="flex flex-wrap items-end gap-6 md:col-span-4 md:col-start-9 md:justify-end">
			{#if project.live}
				<li><a class="btn btn-wide" href={project.live.href}>{project.live.label}</a></li>
			{/if}
			{#if project.source}
				<li><a class="link title-3" href={project.source}>Read the source</a></li>
			{/if}
		</ul>
	</div>

	{#if project.showcase}
		<section class="frame mt-10" aria-labelledby="showcase-title">
			<h2 id="showcase-title" class="heading-4 mb-4">Project showcase</h2>
			<figure>
				<div class="bg-cobalt p-2 sm:p-[2.5%]">
					<video
						class="block aspect-video w-full bg-bg"
						width="1920"
						height="1080"
						controls
						playsinline
						preload="none"
						poster="{showcasePath}.jpg"
						aria-label="{project.title} showcase"
						aria-describedby="showcase-description"
					>
						<source src="{showcasePath}.mp4" type="video/mp4" />
						<track kind="captions" src="{showcasePath}.vtt" srclang="en" label="English" />
						<a class="link" href="{showcasePath}.mp4">Open the showcase video</a>
					</video>
				</div>
				<figcaption class="mt-4 grid gap-2 text-muted">
					<p id="showcase-description" class="max-w-[70ch]">{project.showcase.description}</p>
					<p class="caption-2">
						Music <cite>Happy Beats / Business Moves, Vol. {project.showcase.musicVolume}</cite>
						by <a class="link" href="https://ende.app/en">Sascha Ende</a>, edited (<a
							class="link"
							href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a
						>).
					</p>
				</figcaption>
			</figure>
		</section>
	{:else}
		<div class="frame mt-10">
			<div class="bg-cobalt p-[5%]">
				<enhanced:img
					class="w-full"
					src={shots[0].picture}
					alt={shots[0].alt}
					sizes="83vw"
					fetchpriority="high"
				/>
			</div>
		</div>
	{/if}

	<div class="frame section-pad grid gap-x-8 gap-y-12 md:grid-cols-12">
		<div class="md:col-span-6">
			<h2 class="heading-4">What it is</h2>
			{#each project.story as paragraph, i (i)}
				<p class="body-lg mt-6 max-w-[60ch]">{paragraph}</p>
			{/each}
		</div>
		<div class="md:col-span-5 md:col-start-8">
			<h2 class="heading-4">What it does</h2>
			<ul class="mt-6 flex flex-col gap-0">
				{#each project.built as item (item)}
					<li class="rule py-3">{item}</li>
				{/each}
			</ul>
			<h2 class="heading-4 mt-12">Built with</h2>
			<p class="body-lg mt-6">{project.stack.join(', ')}</p>
		</div>
	</div>

	{#if galleryShots.length}
		<section aria-labelledby="screens-title">
			<h2 id="screens-title" class="frame heading-4">More screens</h2>
			<ul class="frame mt-6 grid gap-4 md:grid-cols-2">
				{#each galleryShots as shot (shot.picture.img.src)}
					<li class="bg-surface p-3 sm:p-5">
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
		class="frame section-pad flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
	>
		<p class="heading-4 max-w-[24ch]">Need something like this built for your business?</p>
		<div class="flex flex-wrap items-center gap-6">
			<a class="btn btn-wide" href="/#brief">{hero.cta}</a>
			<a class="link title-3" href="/#work">Back to all work</a>
		</div>
	</div>
</article>
