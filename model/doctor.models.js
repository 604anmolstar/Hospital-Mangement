const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    phone: {
        type: mongoose.Schema.Types.Number,
        required: true,
        unique: true
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    specialization: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.String,
        // ref: 'Hospital',
        required: true
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)