// pm2 process config for the nuxt-observe host app. Mirrors the portfolio's
// ecosystem.config.cjs: Nitro does NOT read `.env` in production, so dotenv
// loads it here and passes the values into the process environment pm2 starts
// the server with. Contains no secrets itself (safe to commit) — everything
// comes from .env.
//
// Deploy:
//   pnpm install        # ensure dotenv is present
//   pnpm run build
//   pm2 start ecosystem.config.cjs   (or: pm2 reload ecosystem.config.cjs)

require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
  apps: [
    {
      name: 'Observe',
      script: './.output/server/index.mjs',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',

        // Distinct from the portfolio's 8000. Allow .env to override.
        PORT: process.env.PORT || 8001,

        // nuxt-auth-utils cookie sessions require a >= 32-char secret.
        // Mandatory in production.
        NUXT_SESSION_PASSWORD: process.env.NUXT_SESSION_PASSWORD,

        // Bootstrap admin password, referenced by
        // observe.auth.users[0].passwordEnv in nuxt.config.ts. Change .env +
        // `pm2 reload Observe` to rotate the login without a rebuild.
        NUXT_OBSERVE_ADMIN_PASSWORD: process.env.NUXT_OBSERVE_ADMIN_PASSWORD,
      },
    },
  ],
}
