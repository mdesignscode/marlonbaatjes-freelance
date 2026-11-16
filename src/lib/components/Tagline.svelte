<script lang="ts">
	import { tagline } from '#lib/content/site.ts';

	const words = tagline.split(' ');

	// Lights each word as it crosses a line two thirds of the way down the screen.
	function lightUp(node: HTMLElement) {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		node.classList.add('armed');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('lit');
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -33% 0px' }
		);
		node.querySelectorAll('span').forEach((word) => observer.observe(word));
		return () => observer.disconnect();
	}
</script>

<section class="frame py-24" aria-labelledby="promise">
	<h2 id="promise" class="sr-only">What you get</h2>
	<p class="heading-3 max-w-[34ch] lg:ml-[25%]" {@attach lightUp}>
		{#each words as word, i (i)}<span>{`${word} `}</span>{/each}
	</p>
</section>

<style>
	:global(.armed) span {
		opacity: 0.3;
		transition: opacity 500ms var(--ease-settle);
	}

	:global(.armed) span:global(.lit) {
		opacity: 1;
	}
</style>
