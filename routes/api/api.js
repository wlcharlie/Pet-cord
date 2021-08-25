const express = require("express")
const router = express.Router()

const pets = require("./pets")
const users = require("./users")
const healths = require("./healths")
router.use("/pets", pets)
router.use("/users", users)
router.use("/health", healths)

module.exports = router
