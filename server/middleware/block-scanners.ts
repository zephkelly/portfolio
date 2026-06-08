// Bots constantly probe for WordPress/PHP vulnerabilities (wp-includes,
// wlwmanifest.xml, xmlrpc.php, /feed/, etc.). This site is a static Nuxt app
// with no PHP or WordPress, so those paths can never be valid. We short-circuit
// them with a 404 here, before they reach the Vue Router and spam SSR warnings.
const SCANNER_PATTERNS = [
    /\.php(\?|$|\/)/i, // any .php endpoint (xmlrpc.php, wp-login.php, ...)
    /wp-(includes|admin|content|login|json)/i, // WordPress internals
    /wlwmanifest\.xml/i, // Windows Live Writer manifest probe
    /\/feed\/?$/i, // RSS feed probe
    /\.(asp|aspx|jsp|cgi)(\?|$)/i, // other server-tech probes
    /\/(\.env|\.git|\.aws|\.ssh)(\/|$)/i, // secret/config file probes
]

export default defineEventHandler((event) => {
    // Collapse leading double slashes (//wp-includes/...) so patterns match,
    // and strip the query string for the path checks above.
    const url = event.node.req.url || ''
    const path = url.replace(/^\/+/, '/')

    if (SCANNER_PATTERNS.some(re => re.test(path))) {
        throw createError({ statusCode: 404, statusMessage: 'Not Found' })
    }
})
