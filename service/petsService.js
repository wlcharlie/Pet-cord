const Pet = require('../models/pet')

const petsService = {
  getPets: async () => {
    return await Pet.find({})
  }
}

module.exports = petsService
