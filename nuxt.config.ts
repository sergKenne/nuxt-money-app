// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BASE_URL: 'https://rickandmortyapi.com/api',
    },
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
})
