module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://pure-eyrie-05558.herokuapp.com/'),
    app: {
      keys: env.array('APP_KEYS')
    },
  })