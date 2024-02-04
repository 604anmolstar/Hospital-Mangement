const express = require('express')
const router = express.Router()

// const authController = require('../controller/authController')
// const userController = require('../controller/userController')
// const hospitalController = require('../controller/hospitalController')
// const doctorController = require('../controller/doctorController')
// const recordController= require('../controller/recordController')
// const patientController = require('../controller/patientController')

const { createDoctor } = require("../controller/doctorContoller")


router.post("/doctor",createDoctor)

module.exports = router 