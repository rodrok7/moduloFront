
const Articles = require('../models/articles')

function getAll () {
  return Articles.find({})
}

function getById (id) {
  return Articles.findById(id)
}

function create (urlImage, title, tags, postBody) {
  return Articles.create({urlImage, title, tags, postBody})
}

function deleteById (id){
  return Articles.findByIdAndDelete(id)
}

function updateById (id, urlImage, title, tags, postBody) {
  return Articles.findByIdAndUpdate(id, {urlImage, title, tags, postBody})

}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}