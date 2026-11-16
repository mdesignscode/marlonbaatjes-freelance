import type { Picture } from '@sveltejs/enhanced-img';

/** Who the work was for. Shown on every card and case study, so nothing reads as client work that is not. */
export type ProjectKind = 'client' | 'own' | 'concept';

export const kindLabel: Record<ProjectKind, string> = {
	client: 'Client project',
	own: 'Own project',
	concept: 'Concept project'
};

export type Project = {
	slug: string;
	kind: ProjectKind;
	title: string;
	/** One short fact for the work panel, such as where it runs. */
	fact: string;
	summary: string;
	story: string[];
	built: string[];
	stack: string[];
	live?: { label: string; href: string };
	source?: string;
	/** Alt text for each screenshot, in file order (1.png, 2.png ...). */
	shots: string[];
};

const pictures = import.meta.glob<{ default: Picture }>('../assets/work/*/*.{png,jpg}', {
	eager: true,
	query: { enhanced: true, w: '1366;900;480' }
});

export type Shot = { picture: Picture; alt: string };

/** The screenshots of one project, in file order, paired with their alt text. */
export function shotsOf(project: Project): Shot[] {
	return Object.keys(pictures)
		.filter((path) => path.includes(`/work/${project.slug}/`))
		.sort()
		.map((path, i) => ({
			picture: pictures[path].default,
			alt: project.shots[i] ?? `${project.title} screenshot`
		}));
}

export const projects: Project[] = [
	{
		slug: 'spots',
		kind: 'own',
		title: 'Spots',
		fact: 'Python package on PyPI',
		summary:
			'A Python package that downloads music and video from a link or a search, with a command line tool, an API and a web screen on top.',
		story: [
			'Spots takes a Spotify or YouTube link, or plain search words, and finds the same song across Spotify, Deezer and YouTube. It saves the song as an mp3 with its cover art, album, year and lyrics filled in, or saves the video at the resolution you pick.',
			'It started as a Flask app with a React front end. I rebuilt the core as one installable library first, then put the command line tool, the API and the web screen back on top of it, so all three run the same code.'
		],
		built: [
			'Installs with one pip command and runs from the terminal',
			'Downloads single songs, playlists, albums and an artist’s tracks as tagged mp3 files',
			'Lists every video resolution with its file size before you download',
			'Web screen with one field for links or search words and a status on every row',
			'Tells you which tracks had no match instead of skipping them silently',
			'Keeps a history so nothing downloads twice'
		],
		stack: ['Python', 'Typer', 'Flask', 'yt-dlp', 'pytest', 'React', 'esbuild'],
		live: { label: 'See it on PyPI', href: 'https://pypi.org/project/spots-cli/' },
		source: 'https://github.com/mdesignscode/spots_flask',
		shots: [
			'Spots web screen showing one song with a table of video resolutions and file sizes',
			'Spots web screen listing an album with a checkbox beside each track',
			'Spots web screen showing five YouTube results for a search',
			'Spots web screen with one search result opened to show its video resolutions',
			'Spots start screen explaining the three kinds of input it accepts'
		]
	},
	{
		slug: 'trivia-mania',
		kind: 'own',
		title: 'Trivia Mania',
		fact: 'Web app with accounts',
		summary:
			'A trivia game with user accounts, a score board and personal stats, built to learn how a full web app fits together.',
		story: [
			'Players sign in, pick a difficulty and categories, and answer questions one at a time. The app remembers which questions each player has answered and ranks everyone on a score board.',
			'I first built it in Next.js with questions stored in a JSON file, then moved it to SvelteKit with a real database. Sending each answer straight to the server removed a lot of browser code and made the pages lighter.'
		],
		built: [
			'Sign in, with progress saved for each player',
			'Hundreds of questions, filtered by difficulty and category',
			'A score board and a personal stats page',
			'Answers checked on the server, one question at a time'
		],
		stack: ['TypeScript', 'SvelteKit', 'Sequelize', 'Tailwind CSS'],
		live: { label: 'Open the live app', href: 'https://trivia-mania.onrender.com' },
		source: 'https://github.com/mdesignscode/trivia_mania',
		shots: [
			'Trivia Mania home screen with difficulty and category choices',
			'Trivia Mania question screen with four answers and a progress bar',
			'Trivia Mania stats page showing one player’s answers by difficulty',
			'Trivia Mania score board listing the top ten players'
		]
	},
	{
		slug: 'random-stuff',
		kind: 'own',
		title: 'Random Stuff',
		fact: 'Next.js site on Vercel',
		summary:
			'A collection of small tools in one site: recipes, poems, a game of rock paper scissors and more, each fed by a public API.',
		story: [
			'Random Stuff pulls recipes, poems and other content from several public APIs and presents them in one tidy, responsive site.',
			'The work here was in the plumbing: loading pages quickly, making them easy for search engines to read, keeping them usable by keyboard, and covering the main flows with browser tests.'
		],
		built: [
			'Recipe browser with filtering by tag',
			'Poems, a rock paper scissors game and other small tools',
			'Pages rendered on the server so they load fast and can be found by search',
			'Browser tests for the main flows'
		],
		stack: ['TypeScript', 'Next.js', 'Prisma', 'Tailwind CSS', 'Cypress'],
		live: { label: 'Open the live site', href: 'https://random-stuff-one.vercel.app/' },
		source: 'https://github.com/mdesignscode/passthetime/',
		shots: [
			'Random Stuff recipe page with tag filters and recipe cards',
			'Random Stuff fruit page with a button for each fruit',
			'Random Stuff fruit page with a panel of nutrition facts for a banana',
			'Random Stuff poetry page with choices to find poems by author or title',
			'Random Stuff poetry page listing poems by one author',
			'Random Stuff rock paper scissors game with a picker of objects to play'
		]
	}
];

export const clientProjects = projects.filter((p) => p.kind === 'client');
export const otherProjects = projects.filter((p) => p.kind !== 'client');

export function findProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
