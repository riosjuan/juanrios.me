import { json } from '@sveltejs/kit';

export const prerender = true;

const getProjects = async () => {
	let projects = [];
	const paths = import.meta.glob('/src/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const {
				metadata,
				default: { render }
			} = file; // Destructure for clarity
			const renderedContent = render(); // Call the render function
			const content = renderedContent.html || renderedContent; // Access the 'html' property or fallback
			const project = { ...metadata, slug, content }; // Include content in the project object
			if (project.published) projects.push(project); // Add published projects to the list
		}
	}

	// Sort projects by date in descending order
	projects.sort((first, second) => new Date(second.date) - new Date(first.date));

	return projects;
};

export const GET = async () => {
	const projects = await getProjects(); // Fetch projects
	return json(projects); // Return projects as JSON
};
