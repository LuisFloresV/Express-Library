const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const PORT = process.env.PORT || 9000

const mongo = require('./utils/mongo')
const app = require('./app')

mongo()


app.listen(PORT, () => { console.log(`App ready in Port ${PORT}`) })