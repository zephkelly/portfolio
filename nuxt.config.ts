export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    // UI Library
    extends: [
        ['github:zephkelly/breeze-ui'],
    ],
    breeze: {
        theme: 'default',
        colors: 'default',
        devWarnings: true,
    },

    css: ['~/assets/scss/global.scss'],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },
})
