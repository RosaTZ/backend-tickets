import mongoose from "mongoose";

const clienteSchema= new mongoose.Schema({
    cedula:{type:String,require:true,minlength:8,maxlength:10,unique:true},
    nombre :{type:String},
    apellidos :{type:String},
    telefono : {type:String},
    createdAt :{ type : Date , default : Date.now}
})

export default mongoose.model("Cliente",clienteSchema)