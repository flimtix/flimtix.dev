// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "FLIMTIX.DEV",
			meta: [
				{ name: "author", content: "Manuel Schumacher" },
				{ name: "description", content: "My amazing portfolio!" },
			],
		},
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "@nuxt/image-edge"],
	typescript: {
		strict: true,
	},
});
