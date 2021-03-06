const Pet = require("../models/pet")

const petsService = {
  getPets: async UserId => {
    return await Pet.find({ UserId }).populate("UserId").lean()
  },

  getPet: async ({ UserId, petId }) => {
    return await Pet.findOne({ _id: petId, UserId }).populate("UserId").lean()
  },

  addPet: async data => {
    return await Pet.create(data)
    // return { status: "success", message: "a new pet data has created" }
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
