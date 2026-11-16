import { error } from '@sveltejs/kit';
import { findProject, projects } from '#lib/content/projects.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => projects.map((project) => ({ slug: project.slug }));

export const load: PageLoad = ({ params }) => {
	const project = findProject(params.slug);
	if (!project) error(404, 'No project with that name');
	return { slug: project.slug };
};
