const express = require("express")
const router = express.Router()

const pets = require("./modules/pets")
const api = require("./api/api")

router.use("/api", api)
router.use("/pets", pets)
router.use((req, res, next) => {
  return res
    .status(404)
    .json({ status: "error", message: `Cannot find ${req.method} ${req.path}` })
})
router.use((error, req, res, next) => {
  console.log(error.message)
  return res.json({ status: "error", message: error.message })
})

module.exports = router
