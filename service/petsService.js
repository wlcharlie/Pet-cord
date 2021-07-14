const Pet = require('../models/pet')

const petsService = {
  getPets: async () => {
    return await Pet.find({})
  },

  updatePet: async (data) => {
    return await Pet.findByIdAndUpdate(data.pet.id, data.info)
  }

}

module.exports = petsService
