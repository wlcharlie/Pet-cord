const mongoose = require("mongoose")
const Schema = mongoose.Schema

const healthSchema = new Schema(
  {
    date: { type: Number, required: true },
    weight: { type: Number, required: true },
    water: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    med: { type: Boolean },
    poo: { type: Boolean },
    other: { type: String, default: "" },
    image: { type: Array, default: [] },
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
