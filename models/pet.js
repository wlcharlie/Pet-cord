const mongoose = require("mongoose")
const Schema = mongoose.Schema

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    dob: { type: Number, required: true },
    gender: { type: String, required: true },
    species: { type: String, required: true },
    note: { type: String },
    avatar: { type: String, required: true },
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
      require: true,
    },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

module.exports = mongoose.model("Pet", petSchema)
