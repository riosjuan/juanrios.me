/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const config = {
	preprocess: sveltePreprocess({
		postcss: { plugins: [autoprefixer] }
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
