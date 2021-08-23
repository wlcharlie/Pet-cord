const petsService = require("../../service/petsService")
const imgur = require("../../utils/imgur")

const petsController = {
  getPets: async (req, res, next) => {
    try {
      const data = await petsService.getPets(req.params.userId)
      return res.json(data)
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
        ...req.body,
        dob: new Date(req.body.dob) / 1000,
      }
      const data = await petsService.addPet(newData)
      return res.json(data)
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
        info: {
          ...req.body,
          dob: new Date(req.body.dob) / 1000,
        },
      }
      const data = await petsService.updatePet(updateData)
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  deletePet: async (req, res, next) => {
    const deleteData = {
      _id: req.params.petId,
      ...req.body,
    }
    try {
      const data = petsService.deletePet(deleteData)
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = petsController
