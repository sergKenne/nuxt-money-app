// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '',
        // Keys within public are also exposed client-side
        public: {
            BASE_URL: 'https://rickandmortyapi.com/api',
        },
    },
    css: ['~/assets/scss/main.scss'],
    modules: ['@pinia/nuxt'],
    //ssr: false
});
