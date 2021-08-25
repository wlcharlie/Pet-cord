const express = require("express")
const router = express.Router()

const pets = require("./pets")
const users = require("./users")
const healths = require("./healths")
router.use("/pets", pets)
router.use("/users", users)
router.use("/healths", healths)

module.exports = router
