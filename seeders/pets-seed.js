const db = require('../config/mongoose')
const Pet = require('../models/pet')

const dummyData = require('../dummyData.json').results

db.once('open', async () => {
  try {
    await Pet.create(dummyData)
    return db.close()
  } catch (err) {
    throw new Error(err)
  }
})
