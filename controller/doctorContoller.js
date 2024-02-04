 const doctorModels = require('../model/doctor.models')
const {ObjectId}=require("mongoose").Types

const createDoctor= async function(req,res){



    try {
        const {
            name,
            email,
            phone,
            address,
            specialization,
            hospital }=req.query

            const doctorData= await  doctorModels.create({
                name,
                email,
                phone,
                address,
                specialization,
                hospital
            })
            
            res.send({messagr:"Profile created succesfully",doctorData})
            }
        
     catch (error) {
        return res.status(500).send({message:error.message})     

    }
}

module.exports={createDoctor}

