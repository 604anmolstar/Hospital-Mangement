const express = require('express')
const mongoose = require('mongoose')
const doctorRoute = require('./route/routes')
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://604anmolstar:hospital-management@hospital-management.un0klgq.mongodb.net/"
, {
    useNewUrlParser: true,
}).then(() => console.log('MongoDB is  Connected')).catch(err => console.log(err));



app.use('/api', doctorRoute)


app.listen(3000,() => {
    console.log('Server is running on port 3000')
})
// hospital-management