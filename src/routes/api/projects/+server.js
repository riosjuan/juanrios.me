import { json } from '@sveltejs/kit';
import { render } from 'svelte/server';
import sanitizeHtml from 'sanitize-html';

export const prerender = true;

const getProjects = async () => {
	let projects = [];
	const paths = import.meta.glob('/src/projects/*.md', { eager: true });
	const parseDate = (value) => {
		const timeStamp = Date.parse(value);
		return Number.isNaN(timeStamp) ? 0 : timeStamp;
	};

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const { metadata, default: body } = file;

			const safeHtml = sanitizeHtml(render(body).html);
			const project = { ...metadata, slug, body: safeHtml };

			if (project.published) projects.push(project); // Add published projects to the list
		}
	}

	// Sort projects by date in descending order
	projects.sort((first, second) => parseDate(second.date) - parseDate(first.date));

	return projects;
};

export const GET = async () => {
	const projects = await getProjects(); // Fetch projects
	return json(projects); // Return projects as JSON
};
