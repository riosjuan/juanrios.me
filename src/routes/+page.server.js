export const load = async ({ fetch }) => {
	try {
		const response = await fetch('/api/projects');

		if (!response.ok) {
			return { projects: [] };
		}

		const projects = await response.json();
		return { projects: Array.isArray(projects) ? projects : [] };
	} catch {
		return { projects: [] };
	}
};
