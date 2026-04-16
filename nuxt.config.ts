export default defineNuxtConfig({
  // This tells Nuxt 4 to behave like Nuxt 3 regarding folder structure
  future: {
    compatibilityVersion: 4,
  },
  srcDir: '.', // Point to the root directory
  
  builder: 'webpack', // Note: Vite is usually preferred, but this works
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})