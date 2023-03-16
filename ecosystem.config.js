module.exports = {
  apps: [
    {
      name: 'Portfolio',
      port: 8000,
      exec_mode: 'cluster',
      instances: '1',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}