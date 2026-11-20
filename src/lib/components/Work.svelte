<script lang="ts">
	import { kindLabel, shotsOf, type Project } from '#lib/content/projects.ts';

	type Props = { id: string; title: string; intro: string; projects: Project[] };
	let { id, title, intro, projects }: Props = $props();
</script>

<section {id} aria-labelledby="{id}-title" class="bg-surface">
	<div class="frame section-pad">
		<div class="mb-9 grid items-end gap-5 md:mb-12 md:grid-cols-2">
			<h2 id="{id}-title" class="heading-2">{title}</h2>
			<p class="body-lg max-w-[42ch] text-muted md:justify-self-end">{intro}</p>
		</div>

		<div class="gallery">
			{#each projects as project (project.slug)}
				{@const cover = shotsOf(project)[0]}
				<article class="project">
					<a class="project-link" href="/work/{project.slug}">
						<div class="project-image">
							<enhanced:img
								src={cover.picture}
								alt={cover.alt}
								sizes="(min-width: 64rem) 35vw, (min-width: 48rem) 45vw, 91vw"
								loading="lazy"
							/>
						</div>
						<div class="project-caption">
							<div>
								<p class="meta text-muted">{kindLabel[project.kind]}</p>
								<h3 class="heading-3 mt-1">{project.title}</h3>
								<p class="caption-2 mt-2">{project.fact}</p>
							</div>
							<span class="project-arrow" aria-hidden="true"><span class="arrow"></span></span>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.gallery {
		display: grid;
		gap: 2rem clamp(1rem, 2.6vw, 2.5rem);
	}

	.project {
		min-width: 0;
	}
	.project-link {
		display: block;
	}

	.project-image {
		display: grid;
		place-items: center;
		padding: 7.5% 8%;
		background: var(--color-citron);
	}

	.project:nth-child(3n + 2) .project-image {
		background: var(--color-raise);
	}
	.project:nth-child(3n + 3) .project-image {
		background: var(--color-cobalt);
	}
	.project-image :global(img) {
		display: block;
		width: 100%;
		height: auto;
	}

	.project-caption {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.8rem;
		padding-block: 0.9rem 1.1rem;
		border-bottom: 1px solid var(--color-line);
	}

	.project-arrow {
		display: grid;
		width: 2.65rem;
		aspect-ratio: 1;
		flex: none;
		place-items: center;
		border: 1px solid var(--color-ink);
	}

	.project-link:hover .project-arrow {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	@media (width >= 48rem) {
		.gallery {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (width >= 64rem) {
		.gallery {
			grid-template-columns: 1.15fr 0.93fr 0.93fr;
			align-items: end;
		}
	}
</style>
