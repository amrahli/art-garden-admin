module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://art-garden-admin.herokuapp.com/'),
    app: {
      keys: env.array('APP_KEYS')
    },
  })