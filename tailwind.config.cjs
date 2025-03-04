/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		typography: {
			default: {
				css: {
					h1: {	
						'font-size': '2.5rem',
						'font-weight': '700',
					},

					'code::before': {
						content: '""',
					},
					'code::after': {
						content: '""',
					}
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
