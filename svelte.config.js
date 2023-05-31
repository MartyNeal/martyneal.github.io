import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
export const config = {
	kit: {
		adapter: adapter({
			pages: 'build/',
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};
