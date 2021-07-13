const express = require('express')
const router = express.Router()

const petsController = require('../../controller/petsController')

router.get('/', petsController.getPets)

module.exports = router
