const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'An email must be provided!'],
    trim: true,
    validate: [validator.isEmail, 'A valid email must be provided']
  },
  password: {
    type: String,
    required: [true, 'A password must be provided!'],
    trim: true
  }
})

//to JSON 
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  return userObject
}

userSchema.methods.generateAuth = function () {
  const user = this
  const token = jwt.sign({ _email: user.email }, process.env.SECRET, { expiresIn: '4h' })
  return token
}

//Hashed password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 7)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User