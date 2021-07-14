const Pet = require('../models/pet')

const petsService = {
  getPets: async () => {
    return await Pet.find({})
  },

  addPet: async (data) => {
    return await Pet.create(data)
  },

  updatePet: async (data) => {
    return await Pet.findByIdAndUpdate(data.pet.id, data.info)
  }

}

module.exports = petsService
