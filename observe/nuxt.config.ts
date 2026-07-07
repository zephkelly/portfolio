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

    // Minimum viable auth: a single bootstrap admin. The password is never in
    // config — only the NAME of the env var that holds it. Every other user,
    // service, group and ingest key is created later through the dashboard UI.
    // NUXT_SESSION_PASSWORD (>=32 chars) must also be set for cookie sessions.
    auth: {
      users: [
        { name: 'admin', role: 'admin', passwordEnv: 'NUXT_OBSERVE_ADMIN_PASSWORD' },
      ],
    },
  },
})
