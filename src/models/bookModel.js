const mongoose = require('mongoose')
const validator = require('validator')

const bookSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    required: [true, 'An ISBN must be provided!'],
    unique: true,
    trim: true,
    validate: [validator.isISBN, 'A valid ISBN must be provided!']
  },
  name: {
    type: String,
    required: [true, 'A book name must be provided!'],
  },
  author: {
    type: String,
    required: [true, 'An author must be provided!'],
  }

})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book