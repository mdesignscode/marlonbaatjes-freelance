/** Copy for the home page. Change words here, not in the components. */

export const site = {
	name: 'Marlon Baatjes',
	url: 'https://marlonbaatjes.is-a.dev',
	email: 'marlonbaatjes62@gmail.com',
	github: 'https://github.com/mdesignscode',
	jobSite: 'https://marlonbaatjes.vercel.app',
	title: 'Marlon Baatjes · Websites, web apps and Python tools',
	description:
		'Freelance full stack developer in South Africa. Websites, web apps and Python automation for small businesses, explained in plain words and handed over ready to run.'
};

export const hero = {
	heading: 'Websites and tools for small businesses',
	sub: 'I’m Marlon Baatjes, a full stack developer in South Africa. I build websites, web apps and Python automation, explain them in plain words and hand them over ready to run.',
	cta: 'Start a project brief',
	proof: 'Every project here is live or open source, so you can try it and read the code.'
};

export const tagline =
	'You describe the problem. I build what fixes it, show you how it works, and hand over everything you need to run it.';

export const services = [
	{
		id: 'site',
		label: 'A website or web app',
		detail:
			'From a one page site to an app with accounts and payments. Built in SvelteKit unless you already use something else.'
	},
	{
		id: 'automation',
		label: 'A Python tool that automates a task',
		detail:
			'Collecting data from websites, cleaning spreadsheets, producing PDFs or connecting two services that do not talk to each other.'
	},
	{
		id: 'fix',
		label: 'A fix or a new feature in an existing app',
		detail:
			'For apps written in React, Next.js or Svelte. I find the bug, fix it and show you the proof.'
	}
] as const;

export const haves = [
	{ id: 'content', label: 'The words and pictures' },
	{ id: 'design', label: 'A design or a site I like' },
	{ id: 'code', label: 'Existing code' },
	{ id: 'hosting', label: 'A domain or hosting' }
] as const;

export const timings = [
	{ id: 'open', label: 'No fixed date' },
	{ id: 'month', label: 'Within a month' },
	{ id: 'week', label: 'Within a week' }
] as const;

export const steps = [
	{
		lead: 'First,',
		text: 'you tell me what you need and what you already have. I ask questions until I can describe the job back to you in one paragraph, and you confirm it before anything is built.'
	},
	{
		lead: 'While I build,',
		text: 'you get a private link to the work in progress. You can open it on your own phone at any point, and tell me what is wrong while it is still cheap to change.'
	},
	{
		lead: 'At the end,',
		text: 'you get the finished thing, the code, and a short written guide to running and changing it. I walk you through it so that nothing about it is a mystery.'
	}
];

export const about = {
	bio: 'I’m Marlon Baatjes, a self taught full stack developer in South Africa. I am new to freelancing, so every project on this page is my own and is labelled that way. What you get is someone who replies quickly, explains things in plain words, and builds your job as if it is the one he will be judged by, because it is.',
	more: 'I work in TypeScript and Python. For websites I prefer SvelteKit, and I am comfortable in React, Next.js, Flask and Tailwind CSS when your project already uses them. I hold the Google IT Support Professional certificate and three certificates from freeCodeCamp.',
	facts: [
		{ label: 'Where', value: 'South Africa, UTC+2' },
		{ label: 'Languages', value: 'English and Afrikaans' },
		{ label: 'Code', value: 'github.com/mdesignscode', href: 'https://github.com/mdesignscode' }
	]
};

export const faq = [
	{
		q: 'Whose projects are these?',
		a: 'Mine. I built each one for myself, and each is labelled as an own project. When I deliver work for clients it will be shown here too, labelled as client work and only with their permission.'
	},
	{
		q: 'What do you need from me to start?',
		a: 'A description of the problem in your own words, examples of anything you like, and whatever you already have: text, pictures, logins to existing accounts or existing code. The brief on this page collects the basics.'
	},
	{
		q: 'What will it cost?',
		a: 'It depends on the size of the job. I read your brief, ask what I need to, and give you a price and a date in writing before any work starts.'
	},
	{
		q: 'Do you use AI tools?',
		a: 'Yes. I use AI coding tools to work faster, and I review and test what goes into your project. I can explain every part of what I deliver.'
	},
	{
		q: 'Can you work on a site someone else built?',
		a: 'Yes, if it is written in React, Next.js, Svelte or Python. For anything else, ask, and I will tell you honestly whether I am the right person.'
	},
	{
		q: 'Who owns the code when you finish?',
		a: 'You do. You get the full source, and I set it up under your own accounts wherever that is possible, so you are never locked in to me.'
	},
	{
		q: 'When are you available?',
		a: 'I am in South Africa, two hours ahead of UTC. I answer messages during my day and usually within a few hours.'
	}
];
