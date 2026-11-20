<script lang="ts">
	import { findProject, shotsOf } from '#lib/content/projects.ts';
	import { hero } from '#lib/content/site.ts';

	const randomStuff = shotsOf(findProject('random-stuff')!)[0];
	const trivia = shotsOf(findProject('trivia-mania')!)[0];
</script>

<section class="hero frame" aria-labelledby="hero-title">
	<div class="hero-copy">
		<h1 id="hero-title" class="display hero-title">
			{hero.heading[0]}<br />{hero.heading[1]}<br />{hero.heading[2]}
		</h1>
		<p class="body-lg mt-6 max-w-[42ch]">{hero.sub}</p>
		<a class="btn mt-7" href="#brief"
			>{hero.cta}<span class="arrow arrow-down" aria-hidden="true"></span></a
		>
	</div>

	<figure class="min-w-0">
		<a class="artwork" href="#work" aria-label="View work from the portfolio">
			<div class="print print-first">
				<enhanced:img
					src={trivia.picture}
					alt={trivia.alt}
					sizes="(min-width: 64rem) 340px, 58vw"
				/>
			</div>
			<div class="print print-main">
				<enhanced:img
					src={randomStuff.picture}
					alt={randomStuff.alt}
					sizes="(min-width: 64rem) 420px, 65vw"
					fetchpriority="high"
				/>
			</div>
			<span class="artwork-link" aria-hidden="true">View work <span class="arrow"></span></span>
		</a>
		<figcaption class="mt-3 flex items-center justify-between gap-2">
			<span class="meta">From the portfolio</span>
			<span class="caption-2 text-muted">Trivia Mania &amp; Random Stuff</span>
		</figcaption>
	</figure>
</section>

<style>
	.hero {
		display: grid;
		align-items: center;
		gap: clamp(2.25rem, 5vw, 5rem);
		padding-block: clamp(2.5rem, 6vw, 5.75rem) clamp(3rem, 6vw, 6rem);
	}

	.hero-title {
		font-size: clamp(3.2rem, 2.4rem + 4.05vw, 6.2rem);
	}

	.artwork {
		position: relative;
		display: block;
		isolation: isolate;
		overflow: clip;
		aspect-ratio: 1.18;
		background: var(--color-cobalt);
		color: var(--color-white);
		outline-color: var(--color-link);
	}

	.artwork::before {
		content: '';
		position: absolute;
		inset: 11% auto auto -16%;
		width: 97%;
		aspect-ratio: 1;
		border: 1px solid var(--color-blue-line);
		border-radius: 50%;
	}

	.print {
		position: absolute;
		box-shadow: 0 14px 32px var(--color-blue-shadow);
	}

	.print :global(img) {
		display: block;
		width: 100%;
		height: auto;
	}

	.print-first {
		width: 66%;
		inset: 14% auto auto 9%;
		transform: rotate(-8deg);
	}

	.print-main {
		width: 77%;
		inset: auto 4% 14% auto;
		transform: rotate(7deg);
	}

	.artwork-link {
		position: absolute;
		inset: auto auto 0.8rem 0.8rem;
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		gap: 0.55rem;
		padding-inline: 0.65rem;
		font-size: 0.8125rem;
		font-weight: 650;
		background: var(--color-citron);
		color: var(--color-on-citron);
	}

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		.print {
			transition: transform 280ms var(--ease-settle);
		}

		.artwork:hover .print-main {
			transform: translateY(-3%) rotate(4deg);
		}

		.artwork:hover .print-first {
			transform: translateY(-3%) rotate(-10deg);
		}
	}

	@media (width >= 52rem) {
		.hero {
			grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
		}
	}

	@media (width < 24rem) {
		.hero-title {
			font-size: clamp(2.5rem, 12vw, 3.2rem);
		}
	}
</style>
