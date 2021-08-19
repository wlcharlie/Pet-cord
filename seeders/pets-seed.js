const db = require("../config/mongoose")
const Pet = require("../models/pet")

const dummyData = require("../dummyData.json").results

db.once("open", async () => {
  try {
    const data = dummyData.map(e => {
      return {
        ...e,
        dob: new Date(e.dob) / 1000,
      }
    })
    await Pet.create(data)
    return db.close()
  } catch (err) {
    throw new Error(err)
  }
})
