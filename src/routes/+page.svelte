<script lang="ts">
	import About from '#lib/components/About.svelte';
	import Brief from '#lib/components/Brief.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Process from '#lib/components/Process.svelte';
	import Tagline from '#lib/components/Tagline.svelte';
	import Work from '#lib/components/Work.svelte';
	import { clientProjects, otherProjects } from '#lib/content/projects.ts';
	import { site } from '#lib/content/site.ts';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
</svelte:head>

<Hero />
<Tagline />
<Brief />

<!-- Client work appears only once a real client project exists in projects.ts. -->
{#if clientProjects.length}
	<Work
		id="clients"
		title="Work for clients"
		intro="Projects I was hired to build, shown with each client’s permission."
		projects={clientProjects}
	/>
{/if}

<Work
	id="work"
	title="Built on my own time"
	intro="These are my own projects, not client work. Each one is live or open source, so you can try it and read the code before you hire me."
	projects={otherProjects}
/>

<Process />
<About />
<Faq />
<Contact />
