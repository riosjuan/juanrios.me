import { getProjects } from '$lib/project-loader';

export const load = async () => {
	try {
		const projects = await getProjects();
		return { projects };
	} catch (error) {
		console.error('Error loading projects:', error);
		return { projects: [] };
	}
};
