const express = require('express')
const router = express.Router()

const petsController = require('../../controller/petsController')

router.get('/', petsController.getPets)
router.put('/:petId', petsController.updatePet)

module.exports = router
