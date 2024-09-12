import { json } from '@sveltejs/kit';

export const prerender = true;

const getProjects = async () => {
	let projects = [];

	const paths = import.meta.glob('/src/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const project = { ...metadata, slug };
			project.published && projects.push(project); // Add published projects to the list
		}
	}

	// Sort projects by date in descending order
	projects = projects.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return projects;
};

export const GET = async () => {
	const projects = await getProjects(); // Fetch projects
	return json(projects); // Return projects as JSON
};
