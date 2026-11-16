<script lang="ts">
	import { faq } from '#lib/content/site.ts';
</script>

<section id="questions" class="frame py-24" aria-labelledby="faq-title">
	<div class="grid gap-x-8 gap-y-12 md:grid-cols-12">
		<h2 id="faq-title" class="heading-2 md:col-span-5" data-reveal>Questions people ask first</h2>
		<div class="flex flex-col gap-0.5 md:col-span-6 md:col-start-7">
			{#each faq as item, i (item.q)}
				<details class="bg-surface" data-reveal style="--i: {i}">
					<summary class="title-2 flex min-h-11 cursor-pointer items-center gap-4 p-4">
						<span class="mark" aria-hidden="true"></span>
						{item.q}
					</summary>
					<p class="body-3 max-w-[60ch] px-4 pb-6">{item.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<style>
	summary {
		list-style: none;
		transition: opacity 300ms var(--ease-settle);
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:hover {
		opacity: 0.8;
	}

	details[open] {
		background: var(--color-raise);
	}

	/* A plus that turns into a cross when the answer is open. */
	.mark {
		position: relative;
		width: 0.75rem;
		height: 0.75rem;
		flex: none;
		transition: transform 500ms var(--ease-settle);
	}

	.mark::before,
	.mark::after {
		content: '';
		position: absolute;
		inset: calc(50% - 1px) 0 auto 0;
		height: 2px;
		background: currentColor;
	}

	.mark::after {
		transform: rotate(90deg);
	}

	details[open] .mark {
		transform: rotate(45deg);
	}

	/* Answers slide open where the browser can size to auto; elsewhere they open at once. */
	details::details-content {
		interpolate-size: allow-keywords;
		overflow: clip;
		contain: layout;
	}

	details:not([open])::details-content {
		block-size: 0;
	}

	@media (prefers-reduced-motion: no-preference) {
		details::details-content {
			transition:
				block-size 500ms var(--ease-settle),
				content-visibility 500ms var(--ease-settle) allow-discrete;
		}
	}
</style>
