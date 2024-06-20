const express=require ('express')
const mongoose=require ('mongoose')
const cors=require("cors")
const UserModel = require('./models/Usermodel.js')
// import userRouter 

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(console.log("MongoDB Connected..."))
.catch((err)=> console.log(err))

app.post( '/createUser', (req,res) => {
    UserModel.create(req.body)
    .then(userdata=>res.json(userdata))
    .catch(err=>res.json(err))
})

app.get('/getuser', (req,res)=>{
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/getData/:id', (req,res)=>{
    const id= req.params.id
    UserModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id' , (req, res) =>{
    const id=req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {
        name :req.body.name,
        email:req.body.email,
        age:req.body.age, 
    })
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.delete( '/deleteUser/:id' , (req, res) =>{
    const id=req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(()=>res.json("Deleted Successfully!"))
    .catch(err=>res.send(err))
})

app.listen(3004,()=>{
    console.log("Server is running on port 3004")
})