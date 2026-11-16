<script lang="ts">
	import './layout.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import favicon from '#lib/assets/favicon.svg';
	import { hero, site } from '#lib/content/site.ts';
	import { watchReveals } from '#lib/reveal.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const links = [
		{ label: 'Services', href: '/#brief' },
		{ label: 'Work', href: '/#work' },
		{ label: 'Process', href: '/#process' },
		{ label: 'About', href: '/#about' }
	];

	afterNavigate(() => watchReveals());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url + page.url.pathname} />
	<meta property="og:image" content={site.url + '/share.png'} />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href={site.url + page.url.pathname} />
</svelte:head>

<a class="btn absolute top-2 left-4 z-20 -translate-y-24 focus-visible:translate-y-0" href="#main"
	>Skip to content</a
>

<header class="frame absolute inset-x-0 top-0 z-10 flex h-16 items-center justify-between gap-6">
	<a
		class="title-3 no-underline"
		href="/"
		aria-current={page.url.pathname === '/' ? 'page' : undefined}>{site.name}</a
	>
	<nav aria-label="Main" class="hidden md:block">
		<ul class="flex gap-6">
			{#each links as link (link.href)}
				<li><a class="caption-1 link no-underline" href={link.href}>{link.label}</a></li>
			{/each}
		</ul>
	</nav>
	<a class="caption-1 link" href="/#brief">{hero.cta}</a>
</header>

<main id="main">
	{@render children()}
</main>

<footer
	class="frame caption-2 mt-24 grid gap-2 pb-6 text-muted md:grid-cols-[1fr_auto_1fr] md:items-baseline"
>
	<p>Freelance developer, South Africa</p>
	<ul class="flex flex-wrap gap-x-6 gap-y-2 text-ink">
		<li><a class="link" href="mailto:{site.email}">Email</a></li>
		<li><a class="link" href={site.github}>GitHub</a></li>
		<li><a class="link" href="{site.jobSite}/resume">Resume, for employers</a></li>
	</ul>
	<p class="md:text-right">
		2026 · <a class="link text-ink" href="/privacy">Privacy</a>
	</p>
</footer>
