/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		typography: {
			default: {
				css: {
					'h1': {	
						'font-size': '2.5rem',
						'font-weight': '700',
						'line-height': '1.2',
						'margin-bottom': '1rem',
					},
					'h2': {
						'font-size': '2rem',
						'font-weight': '700',
						'line-height': '1.2',
						'margin-bottom': '1rem',
					},
					'h3': {
						'font-size': '1.75rem',
						'font-weight': '700',
						'line-height': '1.2',
						'margin-bottom': '1rem',
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
