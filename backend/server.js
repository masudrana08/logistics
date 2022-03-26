const express = require('express')
const  cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const  PORT = 5555
const app = express()

app.use(cors())
app.use(bodyParser.json())

const ContactSchema = mongoose.Schema({
  fname : String, 
  lname : String,
  company : String,
  email : String,
  phone : Number || String,
  message : String,

})
const ContactModel = new  mongoose.model('Contact', ContactSchema)

app.post('/contact', (req, res)=>{
  const {fname, lname, company, email, phone, message} = req.body
  const  Contact = new ContactModel({
    fname, lname, company,  email, phone, message
  })

  Contact.save((err, result)=>{
    res.send('contact saved')
    console.log(result)
  })
})

mongoose.connect('mongodb://localhost:27017/logistic', ()=>{
  console.log('DB Connected')
});

app.listen(PORT, ()=>{
  console.log('Server is running with port ' + PORT)
})