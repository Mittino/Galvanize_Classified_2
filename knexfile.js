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
    connection:'postgres://bxlcbjioasiyhx:ec50d2172c3c281f4c97e387a2d34b8b13f30a49187385b5c18636b55c55ab89@ec2-23-23-212-121.compute-1.amazonaws.com:5432/d2hobr3980dj4k'

},

};
