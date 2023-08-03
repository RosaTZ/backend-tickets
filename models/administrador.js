import mongoose from "mongoose";

const administradorSchema=new mongoose.Schema({
    email : {type:String,require:true, unique:true},
    password:{type:String,require:true},
    estado:{type:Number,default:1,require:true},
    createdAt :{ type : Date , default : Date.now}
})
export default mongoose.model("Administrador",administradorSchema)