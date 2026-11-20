<script lang="ts">
	import { about } from '#lib/content/site.ts';
</script>

<section id="about" class="bg-raise" aria-labelledby="about-title">
	<div
		class="frame section-pad grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14"
	>
		<div>
			<h2 id="about-title" class="heading-2">About Marlon</h2>
			<div class="mt-6 w-full max-w-[18rem] bg-cobalt p-3 sm:p-4">
				<enhanced:img
					class="aspect-square w-full object-contain"
					src="#lib/assets/marlon.png"
					alt="Illustrated portrait of Marlon Baatjes"
					sizes="256px"
					loading="lazy"
				/>
			</div>
		</div>
		<div class="self-end">
			<p class="body-lg max-w-[60ch]">{about.bio}</p>
			<p class="mt-5 max-w-[64ch] text-muted">{about.more}</p>
			<dl class="rule mt-8 flex flex-wrap gap-x-8 gap-y-4 pt-5">
				{#each about.facts as fact (fact.label)}
					<div>
						<dt class="meta text-muted">{fact.label}</dt>
						<dd class="caption-1 mt-1">
							{#if fact.href}<a class="link" href={fact.href}>{fact.value}</a
								>{:else}{fact.value}{/if}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
