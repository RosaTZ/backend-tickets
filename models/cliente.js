import mongoose from "mongoose";

const clienteSchema= new mongoose.Schema({
    cedula:{type:String,require:true,unique:true},
    nombre :{type:String},
    apellidos :{type:String},
    telefono : {type:String},
    estado:{type:Number,default:1,require:true},
    createdAt :{ type : Date , default : Date.now}
})

export default mongoose.model("Cliente",clienteSchema)