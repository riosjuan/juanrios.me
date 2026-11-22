export const prerender = true;

const SITE_URL = 'https://juanrios.me';
const PAGES = ['/'];

export const GET = () => {
	const urls = PAGES.map((path) => `\t<url>\n\t\t<loc>${SITE_URL}${path}</loc>\n\t</url>`).join(
		'\n'
	);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
