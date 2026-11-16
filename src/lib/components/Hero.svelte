<script lang="ts">
	import { otherProjects, shotsOf } from '#lib/content/projects.ts';
	import { hero } from '#lib/content/site.ts';

	// Every screen is a real one, from a project that can be opened and tried.
	const frames = otherProjects.flatMap((project) =>
		shotsOf(project).map((shot) => ({ ...shot, project }))
	);
</script>

<section class="flex min-h-svh flex-col justify-between gap-8 pt-24 pb-8">
	<div class="frame">
		<h1 class="heading-1 max-w-[680px]">{hero.heading}</h1>
		<p class="body-lg mt-8 max-w-[52ch]">{hero.sub}</p>
	</div>

	<ul class="strip frame" aria-label="Screens from my projects. Scroll sideways for more.">
		{#each frames as frame, i (frame.picture.img.src)}
			<li>
				<a
					class="block"
					href="/work/{frame.project.slug}"
					aria-label="{frame.project.title} case study"
				>
					<enhanced:img
						class="h-[34svh] w-auto max-w-none"
						src={frame.picture}
						alt={frame.alt}
						sizes="60vh"
						loading={i < 3 ? 'eager' : 'lazy'}
						fetchpriority={i === 0 ? 'high' : undefined}
					/>
				</a>
			</li>
		{/each}
	</ul>

	<div class="frame flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<p class="caption-2 max-w-[44ch] text-muted md:order-1">{hero.proof}</p>
		<a class="btn btn-wide md:order-2" href="#brief">{hero.cta}</a>
	</div>
</section>

<style>
	.strip {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
		scroll-snap-type: x proximity;
		scroll-padding-inline: 1rem;
		scrollbar-width: none;
	}

	@media (width >= 48rem) {
		.strip {
			scroll-padding-inline: 2rem;
		}
	}

	.strip li {
		flex: none;
		scroll-snap-align: start;
		opacity: 0.85;
		transition: opacity 300ms var(--ease-settle);
	}

	.strip li:hover,
	.strip li:focus-within {
		opacity: 1;
	}

	/* The screen nearest the middle of the strip is lit; the rest sit back in the dark. */
	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			.strip li {
				animation: lit linear both;
				animation-timeline: view(inline);
			}
			.strip li:hover,
			.strip li:focus-within {
				animation: none;
			}
		}
	}

	@keyframes lit {
		0%,
		100% {
			opacity: 0.4;
		}
		40%,
		60% {
			opacity: 1;
		}
	}
</style>
