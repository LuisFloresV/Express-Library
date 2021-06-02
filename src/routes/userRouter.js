const express = require('express')
const router = express.Router()
const { postUser } = require('../controllers/userController')

router.route('/users')
  .post(postUser)

module.exports = router