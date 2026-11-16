<script lang="ts">
	import { about } from '#lib/content/site.ts';
</script>

<section id="about" class="frame py-24" aria-labelledby="about-title">
	<h2 id="about-title" class="sr-only">About Marlon</h2>
	<div class="grid gap-x-8 gap-y-12 md:grid-cols-12">
		<div class="heading-4 font-normal md:order-2 md:col-span-9 md:col-start-4">
			<p data-reveal>
				<enhanced:img
					class="float-left mr-[0.5em] mb-1 size-[4.4em] bg-surface object-cover object-top md:size-[3.6em]"
					src="#lib/assets/marlon.png"
					alt="Illustrated portrait of Marlon Baatjes"
					sizes="140px"
					loading="lazy"
				/>
				{about.bio}
			</p>
			<p class="clear-both mt-8 text-muted" data-reveal>{about.more}</p>
		</div>

		<dl class="grid grid-cols-3 gap-4 md:order-1 md:col-span-2 md:grid-cols-1 md:content-start">
			{#each about.facts as fact, i (fact.label)}
				<div data-reveal style="--i: {i}">
					<dt class="caption-2 text-muted">{fact.label}</dt>
					<dd class="caption-1 mt-1 break-words">
						{#if fact.href}
							<a class="link" href={fact.href}>{fact.value}</a>
						{:else}
							{fact.value}
						{/if}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
