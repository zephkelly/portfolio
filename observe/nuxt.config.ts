// Standalone host app for the nuxt-observe module. It exists only to give the
// module a Nitro server to build into a self-contained .output — mirroring the
// module's own playground config, which is the known-good reference.
export default defineNuxtConfig({
  modules: ['nuxt-observe'],
  compatibilityDate: 'latest',

  // Send the bare root at the dashboard so `/` -> `/observe`.
  routeRules: {
    '/': { redirect: '/observe' },
  },

  observe: {
    // Persistent SQLite location. Set at build time in CI to a path OUTSIDE the
    // deploy dir so releases don't wipe collected data. Falls back to a local
    // .data file for `pnpm dev`.
    database: { path: process.env.OBSERVE_DB_PATH || '.data/observe.sqlite3' },

    // DB-backed users: the `users` table is the source of truth. Users are created
    // and scoped through the dashboard UI. The config `admin` below is only the
    // bootstrap fallback: it authenticates while the DB has zero enabled admins, then
    // retires automatically once a real DB admin exists (never written to the DB).
    // The password is never in config — only the NAME of the env var that holds it.
    // NUXT_SESSION_PASSWORD (>=32 chars) must also be set for cookie sessions.
    auth: {
        provider: 'db',
        users: [{ name: 'admin', role: 'admin', passwordEnv: 'NUXT_OBSERVE_ADMIN_PASSWORD' }],
        jwt: {
            enabled: true,
            algorithms: ['HS256'],
            roleMap: { superuser: 'admin', staff: 'manager' }, // maps your token's role claim → observe role
        },
    },
  },
})
