const Health = require("../models/health")
const Pet = require("../models/pet")

const healthsService = {
  getPetsOverviewHealths: async () => {
    return await Pet.aggregate([
      {
        $lookup: {
          from: "health",
          as: "health",
          let: {
            PetId: "$_id",
          },
          pipeline: [{ $match: { $expr: { $eq: ["$PetId", "$$PetId"] } } }],
        },
      },
    ])

    // return await Pet.aggregate([
    //   {
    //     $lookup: {
    //       from: "Health",
    //       localField: "Pet._id",
    //       foreignField: "Health.PetId",
    //       as: "HealthRecord",
    //       // pipeline: [{ $sort: "Health.date" }, { $limit: 2 }],
    //     },
    //   },
    // ])
  },

  getPetHealth: async PetId => {
    return await Health.find({ PetId })
      .limit(14)
      .sort("date desc")
      .populate("PetId")
      .lean()
  },

  getOneHealth: async data => {
    return await Health.findOne(data).populate("PetId").lean()
  },

  addHealth: async data => {
    await Health.create(data)
    return { status: "success", message: "a new health data has created" }
  },

  updateHealth: async data => {
    await Health.findByIdAndUpdate(data.health.id, data.info)
    return { status: "success", message: "a health data has updated" }
  },

  deleteHealth: async data => {
    await Health.findOneAndDelete(data)
    return { status: "success", message: "a health data has deleted" }
  },
}

module.exports = healthsService
