const petsService = require('../service/petsService')

const petsController = {
  getPets: async (req, res, next) => {
    try {
      const data = await petsService.getPets()
      return res.render('pets', { data })
    } catch (error) {
      next(error)
    }
  },

  addPet: async (req, res, next) => {
    try {
      const newData = {
        ...req.body
      }
      await petsService.addPet(newData)
      return res.redirect('/pets')
    } catch (error) {
      next(error)
    }
  },

  updatePet: async (req, res, next) => {
    try {
      const updateData = {
        pet: { id: req.params.petId },
        info: { ...req.body }
      }
      await petsService.updatePet(updateData)
      return res.redirect('/pets')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = petsController
