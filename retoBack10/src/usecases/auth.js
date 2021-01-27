
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('../models/users')

async function signup (email, password) {
  const passwordEncripted = await bcrypt.hash(password, 10)
  return Users.create({email, password: passwordEncripted})
}

async function login (email, password) {

  const userFound = await Users.findOne({email})

  if (!userFound) throw new Error('invalid data')

  const isPasswordValid = await bcrypt.compare(password, userFound.password)
  if(!isPasswordValid) throw new Error('invalid data')
  
  const token = jwt.sign({id: userFound._id}, 'Rod1234')
  return token
}

module.exports = {
  signup,
  login
}