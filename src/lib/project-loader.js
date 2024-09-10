const projectFiles = import.meta.glob('/src/data/projects/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

function getSlugFromPath(path) {
	const parts = path.split('/');
	const filename = parts[parts.length - 1];
	return filename.replace('.md', '');
}

export function getProjects() {
	return Object.entries(projectFiles)
		.map(([path, content]) => {
			const slug = getSlugFromPath(path);
			const [, frontmatter, ...contentParts] = content.split('---');
			const metadata = Object.fromEntries(
				frontmatter
					.trim()
					.split('\n')
					.map((line) => {
						const [key, ...valueParts] = line.split(':');
						return [
							key.trim(),
							valueParts
								.join(':')
								.trim()
								.replace(/^['"]|['"]$/g, '')
						];
					})
			);
			const projectContent = contentParts.join('---').trim(); // Get the content after frontmatter

			return {
				...metadata,
				slug,
				content: projectContent, // Include the content
				tags: metadata.tags ? metadata.tags.split(',').map((tag) => tag.trim()) : []
			};
		})
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
}
