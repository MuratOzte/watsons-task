// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Roboto: [300, 400, 500, 700],
            Rubik: [400, 500, 600, 700],
        },
        display: 'swap',
        download: true,
        prefetch: true,
        preload: true,
    },
    runtimeConfig: {
        public: {
            baseAPI: 'https://dummyjson.com/products',
        },
    },
});
