const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')

exports.postUser = catchAsync(async (req, res) => {
  const user = await User.create(req.body)
  const token = user.generateAuth()
  res.status(201).json({ status: 'success', data: { user, token } })
})