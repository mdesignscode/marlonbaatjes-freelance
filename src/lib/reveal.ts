/** Marks every [data-reveal] element with .in the first time it enters the screen. */
export function watchReveals(root: ParentNode = document): () => void {
	const targets = root.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)');
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('in');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -5% 0px' }
	);
	targets.forEach((target) => observer.observe(target));
	return () => observer.disconnect();
}
