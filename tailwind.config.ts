/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["var(--font-orbitron)"],
				helvetica: ["Helvetica Neue"],
				actor: ["var(--font-actor)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
