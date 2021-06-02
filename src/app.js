const express = require('express')
const app = express()
const bookRouter = require('./routes/bookRouter')
const userRouter = require('./routes/userRouter')


app.use(express.json())
app.use(bookRouter)
app.use(userRouter)


module.exports = app