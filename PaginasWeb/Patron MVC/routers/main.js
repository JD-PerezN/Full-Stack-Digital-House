const express = require("express")
const mainController = require("../controllers/mainController.js")
const router = express.Router()

router.get("/", mainController.ingreso)

module.exports = router