const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const petSchema = new Schema({
  name: { type: String, require: true },
  dob: {
    type: Date,
    require: true,
    get: function dateFormat (v) {
      return moment(v).format('YYYY/MM/DD')
    }
  },
  gender: { type: String, require: true },
  species: { type: String, require: true },
  breed: { type: String, require: true },
  note: { type: String, require: true },
  avatar: { type: String, require: true }
}, {
  toJSON: { getters: true },
  toObject: { getters: true }
}
)

module.exports = mongoose.model('Pet', petSchema)
