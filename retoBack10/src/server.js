
const express = require('express')
const cors = require('cors')
const articlesRouter = require('./routes/article')
const authRouter = require('./routes/auth')
const { request } = require('express')
const server = express()

server.use(cors())
server.use(express.json())
server.use('/articles', articlesRouter)
server.use('/auth', authRouter)
//falta montar rutas de los post y get de la base de datos

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'RetoBack10'
  })
})



server.post('')

module.exports = server
