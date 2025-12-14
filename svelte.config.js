import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: { plugins: [autoprefixer] }
		}),
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$lib: './lib',
			$params: './params',
			$routes: './routes'
		}
	}
};

export default config;
