/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
	extensions: ['.md']
};

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: { plugins: [autoprefixer] }
		}),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		files: {
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes'
		}
	}
};

export default config;
