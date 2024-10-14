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
    typescript: {
        typeCheck: true
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'My App',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },
    },
})
