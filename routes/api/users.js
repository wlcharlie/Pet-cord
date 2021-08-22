const express = require("express")
const router = express.Router()

const multer = require("multer")
const upload = multer({ dest: "temp/" })

const usersController = require("../../controller/api/usersController")

router.post("/", usersController.getUser)
router.post("/register", upload.single("avatar"), usersController.addUser)

module.exports = router
