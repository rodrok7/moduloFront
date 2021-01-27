
const db = require('./src/lib/db')
const server = require('./src/server')

db.connect
.then (() => {
  server.listen('8080', () => {
    console.log('Server online')
  })
}) .catch(error => {
  console.error('Error', error)
})