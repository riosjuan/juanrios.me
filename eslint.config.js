import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['build/', '.svelte-kit/', 'package/', 'src/scroll-timeline.js']
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: { ...globals.browser, ...globals.node }
		}
	},
	{
		rules: {
			// No `paths.base` is configured and most hrefs are external URLs from data,
			// so resolve() adds noise without benefit for plain links.
			'svelte/no-navigation-without-resolve': ['error', { ignoreLinks: true }]
		}
	}
];
