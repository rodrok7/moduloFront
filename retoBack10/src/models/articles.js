
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
 
 
  urlImage:{
   type: String,
   required: true
  },  
  title: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  tags: {
    type: String,
    required: true

  },
  postBody: {
    type: String,
    minlength: 10,
    maxlength: 500,
    required: true
  }


})

const model = mongoose.model('articles', schema)

module.exports = model