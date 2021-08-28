const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    UID: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

module.exports = mongoose.model("User", userSchema)
