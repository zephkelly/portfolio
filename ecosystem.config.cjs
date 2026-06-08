// pm2 process config for the built Nuxt/Nitro server.
//
// Nitro does NOT read `.env` in production, so we load it here and pass the
// values into the process environment that pm2 starts the server with.
//
// Contains no secrets itself (safe to commit) — everything comes from .env.
//
// Deploy:
//   npm install        # ensure dotenv is present
//   npm run build
//   pm2 start ecosystem.config.cjs   (or: pm2 reload ecosystem.config.cjs)

require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
  apps: [
    {
      name: 'Portfolio',
      script: './.output/server/index.mjs',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',

        // Port the Nitro server listens on (defaults to 3000 if unset).
        // Allow .env to override, otherwise use 8000.
        PORT: process.env.PORT || 8000,

        // Read directly by the AWS SDK's default credential chain.
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

        // Runtime overrides for Nuxt runtimeConfig (sesRegion / contactFromEmail /
        // contactToEmail). Using NUXT_* here means changing .env + `pm2 reload`
        // takes effect WITHOUT a rebuild, even though these are baked at build time.
        NUXT_SES_REGION: process.env.SES_REGION,
        NUXT_CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
        NUXT_CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
      },
    },
  ],
}
