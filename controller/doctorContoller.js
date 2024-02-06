const doctorModels = require('../model/doctor.models')
const { ObjectId } = require("mongoose").Types

const createDoctor = async function (req, res) {



    try {
        const {
            name,
            email,
            phone,
            address,
            specialization,
            hospital } = req.body

        if (!/^[6-9]\d{9}$/.test(phone)) {
            return res.status(400).send({ message: "please enter mobile number in valid form || please enter correct 10 digint number" })
        }

        const doctorData = await doctorModels.create({
            name,
            email,
            phone,
            address,
            specialization,
            hospital
        })

        res.status(201).send({ messagr: "Profile created succesfully", doctorData })
    }

    catch (error) {
        return res.status(500).send({ message: error.message })

    }
}

const getDoctor= async function(req,res){
    try {
        const doctorData= await doctorModels.find()
        res.status(200).send({message:"docotor data fetched successfully",doctorData})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

const findSingleDoctor = async function (req, res) {
    try {

        const { id } = req.params;

        const doctorData = await doctorModels.findById({_id: id})

        if (!doctorData) {
            return res.status(404).send({ message: "doctor not found" })
        }
        console.log(doctorData);
        res.status(200).send({ message: "doctor data fetched successfully", doctorData })
    } catch (error) {
        return res.status(500).send({ message: error.message })   
    }
}
module.exports = { createDoctor, findSingleDoctor }
 

