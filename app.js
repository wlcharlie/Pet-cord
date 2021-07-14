const express = require('express')
const methodOverride = require('method-override')

const app = express()
const PORT = 3000

const routes = require('./routes')
require('./config/mongoose')

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

app.listen(PORT, console.log(`Running... > http://localhost:${PORT}`))
