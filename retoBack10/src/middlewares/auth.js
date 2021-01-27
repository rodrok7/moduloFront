
const jwt = require('jsonwebtoken')

function auth (request, response, next) {
  try {
    const token = request.headers.authorization
    if (!token) {
      throw new Error('token requiered')
    }
    const payloadDecoded = jwt.verify(token, 'Rod1234')
    if (!payloadDecoded){
      throw new Error('Invalid token')
    }
    next()
  }
  catch (error) {
    response.status(401)
    response.json({
      succes: false,
      message: error.message
    })
  }
  
}

module.exports = auth