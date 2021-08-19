const Pet = require("../models/pet")

const petsService = {
  getPets: async () => {
    return await Pet.find({}).lean()
  },

  addPet: async data => {
    await Pet.create(data)
    return { status: "success", message: "a new pet data has created" }
  },

  updatePet: async data => {
    await Pet.findByIdAndUpdate(data.pet.id, data.info)
    return { status: "success", message: "a pet data has updated" }
  },

  deletePet: async data => {
    await Pet.findOneAndDelete(data)
    return { status: "success", message: "a pet data has deleted" }
  },
}

module.exports = petsService
