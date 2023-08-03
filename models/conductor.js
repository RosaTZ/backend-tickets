import mongoose from "mongoose";

const conductorSchema=new mongoose.Schema({
    cedula:{type:String},
    nombre :{type:String},
    apellidos :{type:String},
    telefono : {type:String},
    licencia : {type:String},
    categoria_licencia:{type:String},
    fecha_vencimiento:{type:Date},
    fecha_nacimiento:{type:Date},
    direccion : {type:String},
    estado_civil : {type:String},
    estado:{type:Number,default:1,require:true},
    createdAt :{ type : Date , default : Date.now}
})
export default mongoose.model("Conductor",conductorSchema)