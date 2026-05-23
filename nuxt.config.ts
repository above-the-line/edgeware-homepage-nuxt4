// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, 
  app: {
    baseURL: '/edgeware-homepage-nuxt4/' 
  },
  nitro: {
    preset: 'github-pages'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   modules: [
    "@netlify/nuxt",
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui' // Handles Tailwind v4 automatically
  ],
  css: ['~/assets/css/main.css'], //This is important 
})