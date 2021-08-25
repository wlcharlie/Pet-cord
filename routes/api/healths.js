const express = require("express")
const router = express.Router()

const multer = require("multer")
const upload = multer({ dest: "temp/" })

const healthsController = require("../../controller/api/healthsController")

router.get("/", healthsController.getPetsOverviewHealths)
router.get("/:petId", healthsController.getPetHealth)
router.get("/:petId/:healthId", healthsController.getOneHealth)

router.post("/:petId", upload.single("image"), healthsController.addHealth)
router.put(
  "/:petId/:healthId",
  upload.single("image"),
  healthsController.updateHealth
)

router.delete("/:petId/:healthId", healthsController.deleteHealth)

module.exports = router
