const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    UID: { type: String, requite: true },
    email: { type: String, requite: true },
    avatar: { type: String, requite: true },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
)

module.exports = mongoose.model("User", userSchema)
