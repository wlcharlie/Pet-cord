const petsService = require('../service/petsService')
const imgur = require('../utils/imgur')

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
    const { file } = req
    if (file) {
      const avatar = await imgur(file.path)
      req.body.avatar = avatar
    }

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
    const { file } = req
    if (file) {
      const avatar = await imgur(file.path)
      req.body.avatar = avatar
    }

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
  },

  deletePet: async (req, res, next) => {
    const deleteData = {
      _id: req.params.petId,
      ...req.body
    }
    try {
      await petsService.deletePet(deleteData)
      return res.redirect('/pets')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = petsController
