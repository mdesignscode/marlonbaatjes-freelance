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
	showcase?: { description: string; musicVolume: number };
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
		showcase: {
			description:
				'The showcase installs Spots from PyPI, follows a sample search, and compares video resolutions and file sizes.',
			musicVolume: 9
		},
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
			'A trivia game with player accounts, a 30 second clock on every question, personal stats and a score board.',
		story: [
			'Players sign up, confirm their email with a code, pick a difficulty and categories, and answer timed questions one at a time. Every answer counts towards their stats by category and their place on the score board.',
			'I first built it in Next.js with questions stored in a JSON file, then moved it to SvelteKit with a real database and later gave it a full redesign. Answers are checked on the server, which keeps cheating out and the pages light.'
		],
		built: [
			'Sign up with email confirmation: codes expire, work once and lock after five wrong guesses',
			'Over two thousand questions, filtered by difficulty and category',
			'A 30 second clock on each question, and a way to stop and continue later',
			'A stats page by category and difficulty, and a top ten score board'
		],
		stack: ['TypeScript', 'SvelteKit', 'Sequelize', 'SQLite', 'Tailwind CSS', 'Vitest'],
		live: { label: 'Open the live app', href: 'https://trivia-mania.onrender.com' },
		source: 'https://github.com/mdesignscode/trivia_mania',
		showcase: {
			description:
				'The showcase picks a difficulty, answers a geography question against the clock, and opens the stats by category.',
			musicVolume: 1
		},
		shots: [
			'Trivia Mania question with a 27 second clock and four answers',
			'Trivia Mania start screen showing 2206 questions ready, with the chosen difficulty and categories',
			'Trivia Mania stats page with answered, correct and accuracy totals and a table by category',
			'Trivia Mania score board with the signed in player marked in third place'
		]
	},
	{
		slug: 'random-stuff',
		kind: 'own',
		title: 'Random Stuff',
		fact: 'Next.js site on Vercel',
		summary:
			'Nine small things to do when you are bored, styled as a street vending machine: punch a code into the keypad and an activity drops out.',
		story: [
			'Every activity sits in a coded slot: fruits, recipes, an art gallery, poems, a trivia quiz, card and word games, and jokes. Click a compartment, or type its code on the keypad, and it opens.',
			'The whole site is a static Next.js export. All content is stored in the repository and turned into plain pages at build time, so it needs no database or keys, keeps working if a source API goes down, and can be installed like an app.'
		],
		built: [
			'A working keypad: type a code such as A3, or press Surprise me',
			'122 recipes with tag filters, 312 poems, 49 fruits and 48 public domain artworks',
			'Rock paper scissors with 101 objects, Higher or Lower and a trivia quiz',
			'Day and night modes, remembered between visits',
			'Installable as an app, with every page built ahead of time',
			'Browser tests for the main flows'
		],
		stack: ['TypeScript', 'Next.js', 'React', 'GSAP', 'Tailwind CSS', 'Cypress'],
		live: { label: 'Open the live site', href: 'https://random-stuff-one.vercel.app/' },
		source: 'https://github.com/mdesignscode/passthetime/',
		showcase: {
			description:
				'The showcase enters A3 on the vending machine keypad, opens the art gallery, and returns to the machine in night mode.',
			musicVolume: 12
		},
		shots: [
			'Random Stuff home page: a vending machine of nine coded activities beside a keypad',
			'Random Stuff recipe browser with tag filters and recipe photos',
			'Random Stuff fruit page with a coloured label for each fruit',
			'Random Stuff poetry page with choices by author or title and a list of poets',
			'Random Stuff rock paper scissors game with a row of objects to play',
			'Random Stuff art gallery of public domain works'
		]
	}
];

export const clientProjects = projects.filter((p) => p.kind === 'client');
export const otherProjects = projects.filter((p) => p.kind !== 'client');

export function findProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
