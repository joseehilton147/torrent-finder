// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'pt-BR',
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			script: [],
			link: [],
			style: [],
			noscript: [],
		},
	},

	css: ['~/assets/style/main.css', '@unocss/reset/tailwind.css'],

	modules: ['@pinia/nuxt', '@unocss/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-icon'],

	pinia: {
		autoImports: ['defineStore'],
	},

	imports: {
		dirs: ['stores'],
	},

	experimental: {
		viewTransition: true,
	},
})
