const imgur = require("../../utils/imgur")
const healthsService = require("../../service/healthsService")

const healthsController = {
  getPetsOverviewHealths: async (req, res, next) => {
    try {
      return await healthsService.getPetsOverviewHealths()
    } catch (error) {
      next(error)
    }
  },

  getPetHealth: async (req, res, next) => {
    try {
      const data = await healthsService.getPetHealth({
        PetId: req.params.petID,
      })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  getOneHealth: async (req, res, next) => {
    try {
      const data = await healthsService.getOneHealth({
        _id: req.params.healthId,
        PetId: req.params.petId,
      })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  addHealth: async (req, res, next) => {
    const PetId = req.params.petId
    const { file } = req
    if (file) {
      const image = await imgur(file.path)
      req.body.image = [image]
    }
    console.log(req.body)

    try {
      const newData = {
        ...req.body,
        date: new Date(req.body.date) / 1000,
        PetId,
      }
      const data = await healthsService.addHealth(newData)
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  updateHealth: async (req, res, next) => {
    const { file } = req
    if (file) {
      const image = await imgur(file.path)
      req.body.image = [image]
    }

    try {
      const updateData = {
        health: { id: req.params.healthId },
        info: {
          ...req.body,
          date: new Date(req.body.date) / 1000,
        },
      }
      const data = await healthsService.updateHealth(updateData)
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },

  deleteHealth: async (req, res, next) => {
    const deleteData = {
      _id: req.params.healthId,
      ...req.body,
    }
    try {
      const data = healthsService.deleteHealth(deleteData)
      return res.json(data)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = healthsController
