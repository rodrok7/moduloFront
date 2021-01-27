
const express = require('express')
const articles = require('./../usecases/articles')

const authMiddleware = require('../middlewares/auth')
const { request } = require('express')

const router = express.Router()

router.get('/', authMiddleware, async(request, response) => {
  const allArticles = await articles.getAll()

  response.json({
    success: true,
    data: allArticles
  })
})

router.get('/:id', authMiddleware, async(request, response) => {
  const articleById = await articles.getById(request.params.id)

  response.json({
    success: true,
    data: articleById
  })
})

router.post('/', async (request, response) => {
  const {urlImage, title, tags, postBody} = request.body
  const articleCreated = await articles.create(urlImage, title, tags, postBody)

  response.json({
    success: true,
    data: articleCreated
  })
})

router.delete('/:id', async (request, response) => {
  const articleDeleted = await articles.deleteById(request.params.id)

  response.json({
    success: true,
    data: articleDeleted
  })
})

router.patch('/:id', async(request, response) => {
  const id = request.params.id
  const {urlImage, title, tags, postBody} = request.body
  const articleUpdated = await articles.updateById(id,urlImage, title, tags, postBody)

  response.json({
    success: true,
    data: articleUpdated
  })
})

module.exports = router