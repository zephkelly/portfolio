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
            meta: [
                { charset: 'utf-8' },
                //@ts-ignore
                { description: 'Evan Kelly is a software developer with a passion for creating fullstack applications.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://www.evankelly.dev/images/og-image.png',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: 'https://www.evankelly.dev',
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Evan Kelly - Software Dev',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'Evan Kelly is a software developer based on the Gold Coast, Australia. He is passionate about creating beautiful fullstack applications.',
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website',
                },
            ],
        }
    }
})
