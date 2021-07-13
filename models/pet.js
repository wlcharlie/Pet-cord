const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
  name: { type: String, require: true },
  dob: { type: Date, require: true },
  gender: { type: String, require: true },
  species: { type: String, require: true },
  breed: { type: String, require: true },
  note: { type: String, require: true },
  avatar: { type: String, require: true }
})

module.exports = mongoose.model('Pet', petSchema)
