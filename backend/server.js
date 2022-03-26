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
  address : String,
  email : String,
  phone : Number || String,
  message : String,

})
const ContactModel = new  mongoose.model('Contact', ContactSchema)

app.post('/contact', (req, res)=>{
  const {fname, lname, company, address, email, phone, message} = req.body
  const  Contact = new ContactModel({
    fname, lname, company, address,  email, phone, message
  })

  Contact.save((err, result)=>{
    res.send('contact saved')
    console.log(result)
  })
})


const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const UserModel = mongoose.model('User', UserSchema)

app.post ('/login', (req, res)=>{
 UserModel.findOne({email:req.body.email, password: req.body.password})
 .then(result=>{
   if(result){
    res.status(200).send({email:result.email, name: result.name})
   }else{
     res.status(401).send({message:'failed'})
   }
 })
})
app.post ('/register', (req, res)=>{
  const User = new UserModel({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
  })
  User.save((err, result)=>{
    if(!err){
      res.status(200).send({message:'registered'})
    }else{
      res.status(401).send({message:'failed'})
    }
  })

})

mongoose.connect('mongodb://localhost:27017/logistic', ()=>{
  console.log('DB Connected')
});

app.listen(PORT, ()=>{
  console.log('Server is running with port ' + PORT)
})