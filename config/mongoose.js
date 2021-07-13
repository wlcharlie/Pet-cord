const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pet-cord', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => console.log('Ooooops, something wrong with mongodb...'))
db.once('open', () => console.log('mongodb connected!'))

module.exports = db
