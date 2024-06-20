const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,unique:true,lowercase: true,required:true},
    age:{type: Number, required: true}
})

const UserModel=mongoose.model("crud_data",UserSchema)
module.exports = UserModel;
