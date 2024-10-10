export default defineNuxtConfig({
    // buildModules: ['@nuxtjs/sass'],
    scss: ['~/assets/global.scss'],
    modules: [
        ['nuxt-mail', {
            message: {
                to: process.env.GMAIL_USER,
            },
            smtp: {
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASSWORD
                },
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
            },
        }],
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
        }
    }
})
