<script lang="ts">
	import { steps, tagline } from '#lib/content/site.ts';
</script>

<section id="process" class="frame section-pad" aria-labelledby="process-title">
	<div class="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline">
		<h2 id="process-title" class="heading-2">How a job runs</h2>
		<p class="body-lg max-w-[52ch] text-muted">{tagline}</p>
	</div>
	<ol class="mt-10 grid gap-x-8 md:mt-16 md:grid-cols-3">
		{#each steps as step, index (step.lead)}
			<li class="rule grid grid-cols-[auto_1fr] items-start gap-4 py-6">
				<span class="heading-3 text-link" aria-hidden="true">{index + 1}</span>
				<p class="max-w-[39ch]"><strong class="font-semibold">{step.lead}</strong> {step.text}</p>
			</li>
		{/each}
	</ol>
</section>
