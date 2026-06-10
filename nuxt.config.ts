export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    modules: ['@nuxt/image'],

    // Server-only config for the contact form's AWS SES sender.
    // Credentials come from the EC2 instance's IAM role, so no keys here.
    runtimeConfig: {
        sesRegion: process.env.SES_REGION || 'ap-southeast-2',
        contactFromEmail: process.env.CONTACT_FROM_EMAIL || '',
        contactToEmail: process.env.CONTACT_TO_EMAIL || '',
    },

    // Source optimised images from the assets directory rather than public.
    // With `dir` set, NuxtImg `src` values resolve relative to assets/images
    // (e.g. src="/works/foo.webp" -> assets/images/works/foo.webp).
    image: {
        dir: 'assets/images',
        quality: 80,
        format: ['webp'],
    },

    // Design system (vendored from the former breeze-ui layer):
    // colors/themes define the raw --*-light/--*-dark tokens, base maps them
    // to the active --foreground/--background/etc. vars (and imports reset.css).
    css: [
        '~/assets/css/colors.css',
        '~/assets/css/themes.css',
        '~/assets/css/base.css',
        '~/assets/scss/global.scss',
    ],
    typescript: {
        typeCheck: true
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Evan Kelly - Software Developer',
            link: [
                { rel: 'canonical', href: 'https://evankelly.dev' },
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            // Set data-color-scheme before paint so base.css reveals the page
            // (it hides html until the attribute is present) and there is no
            // light/dark flash. The colorScheme plugin takes over reactively.
            script: [
                {
                    innerHTML: `
                    (function() {
                        function getInitialColorScheme() {
                            const cookie = document.cookie.split('; ').find(row => row.startsWith('color-scheme='));
                            if (cookie) {
                                const scheme = cookie.split('=')[1];
                                return scheme;
                            }

                            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                return 'dark';
                            }
                            else {
                                return 'light';
                            }
                        }

                        const scheme = getInitialColorScheme();

                        if (scheme === 'light') {
                            document.documentElement.style.backgroundColor = '#fafafa;';
                        }
                        else {
                            document.documentElement.style.backgroundColor = '#1c1c20';
                        }

                        window.addEventListener('load', () => {
                            document.documentElement.style.removeProperty('background-color');
                        });

                        document.documentElement.setAttribute('data-color-scheme', scheme);
                    })();
                `,
                    type: 'text/javascript',
                },
            ],
        },
    },
})
