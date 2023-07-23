import mongoose from "mongoose";

const administradorSchema=new mongoose.Schema({
    nombre :{type:String,require:true},
    email : {type:String,require:true},
    telefono : {type:String,require:true},
    password:{type:Date,require:true},
    createdAt :{ type : Date , default : Date.now}
})
export default mongoose.model("Administrador",administradorSchema)