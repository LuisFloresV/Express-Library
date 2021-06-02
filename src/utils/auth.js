const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const catchAsync = require('./catchAsync')

const auth = function (req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer', '').trim()
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(400).json({ status: 'error', err })
      next()
    })
  } catch (error) {
    res.status(400).json({ status: 'Error', message: 'Please authenticate Bearer Token must be provided!' })
  }
}

module.exports = auth