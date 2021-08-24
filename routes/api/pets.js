const express = require("express")
const router = express.Router()

const multer = require("multer")
const upload = multer({ dest: "temp/" })

const petsController = require("../../controller/api/petsController")

router.get("/:userId", petsController.getPets)
router.get("/:petId", petsController.getPet)
router.post("/", upload.single("avatar"), petsController.addPet)
router.put("/:petId", upload.single("avatar"), petsController.updatePet)
router.delete("/:petId", petsController.deletePet)

module.exports = router
