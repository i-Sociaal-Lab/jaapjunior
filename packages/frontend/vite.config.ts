import { fileURLToPath, URL } from "node:url";

import ui from "@nuxt/ui/vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	plugins: [vue(), tailwindcss(), ui(), vueDevTools()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
