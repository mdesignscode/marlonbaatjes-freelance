<script lang="ts">
	import { faq } from '#lib/content/site.ts';
</script>

<section id="questions" class="frame section-pad" aria-labelledby="faq-title">
	<div class="grid gap-x-8 gap-y-12 md:grid-cols-12">
		<h2 id="faq-title" class="heading-2 md:col-span-5" data-reveal>Common questions</h2>
		<div class="flex flex-col md:col-span-7 md:col-start-6">
			{#each faq as item (item.q)}
				<details class="rule">
					<summary
						class="title-2 flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4"
					>
						{item.q}
						<span class="mark" aria-hidden="true"></span>
					</summary>
					<p class="max-w-[60ch] pb-6 text-muted">{item.a}</p>
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
