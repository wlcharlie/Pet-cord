const express = require('express')
const router = express.Router()

const pets = require('./modules/pets')

router.use('/pets', pets)

module.exports = router
