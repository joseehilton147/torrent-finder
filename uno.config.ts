import {defineConfig, presetUno} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
	presets: [presetUno(), presetRemToPx({baseFontSize: 4})],
	shortcuts: [
		[/^wh-(.+)$/, ([, d]) => `w-${d}px h-${d}px`],
		{
			button: 'b-rd-8 p-y-8 p-x-16 enabled:hover:bg-gray-6 bg-gray-500 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed',
		},
	],
	theme: {
		colors: {
			tfDarkGray: {
				100: '#616C73', // bg-tf-dark-gray-100
				200: '#4F5256', // bg-tf-dark-gray-200
				300: '#3A3A3A', // bg-tf-dark-gray-300
				400: '#1A1A1A', // bg-tf-dark-gray-400
				500: '#212121', // bg-tf-dark-gray-500
			},
			tfSlateGreen: {
				100: '#9DC2B6', // bg-tf-slate-green-100
				200: '#84A5A4', // bg-tf-slate-green-200
				300: '#71888E', // bg-tf-slate-green-300
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		breakpoints: {
			xs: '320px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
	},
	postprocess: util => {
		if (util.selector && typeof util.selector === 'string') {
			// When using border utilities, add border-width and border-style
			if (/^\.border-(.*)$/.test(util.selector)) {
				util.entries.push(['border-width', '1px'], ['border-style', 'solid'])

				return
			}

			const textSizes = [
				'text-xs',
				'text-sm',
				'text-base',
				'text-lg',
				'text-xl',
				'text-2xl',
				'text-3xl',
				'text-4xl',
				'text-5xl',
				'text-6xl',
				'text-7xl',
				'text-8xl',
				'text-9xl',
			]

			if (textSizes.some(size => util.selector.includes(size))) {
				util.entries.forEach(i => {
					const value = i[1] && i[1].toString()

					if (value) i[1] = `${+value.slice(0, -2) * 4}px`
				})
			}
		}
	},
})
