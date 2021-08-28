const express = require("express")
const router = express.Router()

const multer = require("multer")
const upload = multer({ dest: "temp/" })

const usersController = require("../../controller/api/usersController")

router.get("/:UID", usersController.getUser)
router.post("/", usersController.addUser)
router.put("/:UID", usersController.putUser)

module.exports = router
