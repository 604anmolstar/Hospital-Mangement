const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    phone: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    age: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    gender: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

module.exports = mongoose.model('Patient', patientSchema)