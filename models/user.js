const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    UID: { type: String, requited: true },
    email: { type: String, requited: true },
    avatar: { type: String, requited: true },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

module.exports = mongoose.model("User", userSchema)
