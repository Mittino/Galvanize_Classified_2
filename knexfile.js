// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    database: 'gclassifieds',
    connection: 'postgres://localhost/gclassifieds'
  },
  test: {
    client: 'pg',
    database: 'gclassifieds_test',
    connection:'postgres://localhost/gclassifieds_test'
  },
  production: {
    client:'pg',
    connection:'postgres://jvgfcfdehabbzz:ca4d72b3b4c2dda38ac971fc47565ac3cb210baffb01bdd32f31b7ff426ac1f3@ec2-107-20-195-181.compute-1.amazonaws.com:5432/dedga3qeteu4d7'

},

};
