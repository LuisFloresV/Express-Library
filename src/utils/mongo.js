const mongoose = require('mongoose')
const dotenv = require('dotenv')
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)

const connect = () => mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected MongoDB Cluster'))
  .catch(() => console.log('Unable to connect to the Cluster'))


module.exports = connect