const Book = require('../models/bookModel')
const catchAsync = require('../utils/catchAsync')

exports.getBooks = catchAsync(async (req, res) => {
  const books = await Book.find()
  res.status(200).json({ status: 'success', data: books })
})

exports.postBooks = catchAsync(async (req, res) => {
  const book = await Book.create(req.body)
  res.status(201).json({ status: 'success', data: book })
})