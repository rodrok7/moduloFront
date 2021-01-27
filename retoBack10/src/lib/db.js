
const mongoose = require('mongoose')
const url = 'mongodb+srv://Rod10:Rod1234@kodemia10server.8y9fz.mongodb.net/Articles'

const connect = mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

module.exports = {
  connect
}