const express = require('express')
const router = express.Router()
const { getBooks, postBooks } = require('../controllers/bookController')
const auth = require('../utils/auth')

router.route('/books')
  .get(getBooks)
  .post(auth, postBooks)

module.exports = router