const hospitalModel = require('../model/hospital.models')
const {}
exports.getHospital = async (req, res) => {
    const hospital = await hospitalModel.find()
    res.send(hospital)
}

