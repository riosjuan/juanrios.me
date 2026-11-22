import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.svx', '.md'],
			preprocess: [
				sveltePreprocess({
					postcss: { plugins: [autoprefixer] },
					typescript: { compilerOptions: { verbatimModuleSyntax: true } }
				}),
				mdsvex({
					extensions: ['.md']
				})
			],
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	],
	assetsInclude: ['**/*.md']
};

export default config;
