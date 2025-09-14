// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

const SERVER_PORT = 3000
const SITE_URL = "https://0xThales.github.io"
const BASE_PATH = "/portfolio/"
const isProduction =
  process.env.NODE_ENV === "production" || process.env.GITHUB_ACTIONS === "true"

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: isProduction ? BASE_PATH : "/",
  server: {
    port: SERVER_PORT,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
