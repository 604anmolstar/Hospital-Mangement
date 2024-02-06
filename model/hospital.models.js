const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
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
        type:mongoose.Schema.Types.String,
        required: true
    },
    specialization: {
        type: mongoose.Schema.Types.String,
        required: true
    }
}
,{
    timestamps: true
})
module.exports = mongoose.model('Hospital', hospitalSchema)
