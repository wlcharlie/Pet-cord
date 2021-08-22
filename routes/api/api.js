const express = require("express")
const router = express.Router()

const pets = require("./pets")
const users = require("./users")
router.use("/pets", pets)
router.use("/users", users)

module.exports = router
