const mongoose = require("mongoose")
const Schema = mongoose.Schema

const healthSchema = new Schema(
  {
    date: { type: Number, require: true },
    weight: { type: Number, require: true },
    water: { type: Number, require: true },
    food: { type: Number, require: true },
    med: { type: Boolean, require: true },
    poo: { type: Boolean, require: true },
    other: { type: String, require: true },
    image: { type: Array, require: true },
    PetId: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
      index: true,
      require: true,
    },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

module.exports = mongoose.model("Health", healthSchema)
