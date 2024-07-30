import toTailwind from './lib/themes/toTailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './lib/**/*.{js,jsx}'],
	theme: {
		extend: {
			...toTailwind,
		},
	},
	plugins: [],
};
