const mongoose = require("mongoose")
const Schema = mongoose.Schema

const healthSchema = new Schema(
  {
    date: { type: Number, require: true },
    weight: { type: Number, require: true },
    water: { type: Number },
    food: { type: Number },
    med: { type: Boolean },
    poo: { type: Boolean },
    other: { type: String },
    image: { type: Array },
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
