const express = require('express')
const router = express.Router()

// const authController = require('../controller/authController')
// const userController = require('../controller/userController')
// const hospitalController = require('../controller/hospitalController')
// const doctorController = require('../controller/doctorController')
// const recordController= require('../controller/recordController')
// const patientController = require('../controller/patientController')

const { createDoctor, findSingleDoctor} = require("../controller/doctorContoller")


router.post("/doctors",createDoctor)
// router.get("/doctor",getDoctor)
router.get("/doctor/:id",findSingleDoctor)

module.exports = router 