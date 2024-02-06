const patientModel = require('./model/patient.models')

exports.getPatient = async (req, res) => {
    const patient = await patientModel.find()
    res.send(patient)
}