// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
			mdsvex({
					extensions: ['.md', '.svx'],
			})
	],
	kit: {
			adapter: adapter({}),
		// paths: {
    //         base: process.env.NODE_ENV === 'production' ? '/apixelocean.github.io' : '',
    //     },
	}
};

export default config;