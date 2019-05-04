const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/blog')
const middleware = require('./utils/middleware.js')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use(require('./controllers/blogs'))

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
