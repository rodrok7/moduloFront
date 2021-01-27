
const express = require('express')
const auth = require('../usecases/auth')

const router = express.Router()

router.post('/signup', async(request, response) => {
  try {
    const {email, password} = request.body
    const userCreated = await auth.signup(email, password)

    response.json({
      success: true,
      data: userCreated
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/login', async (request, response) => {
  try {
    const {email, password} = request.body
    const token = await auth.login(email, password)

    response.json({
      succes: true,
      message: 'User logged',
      data:{
        token: token
      } 
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router