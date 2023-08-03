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
    estado:{type:Number,require:true},
    seguro:{
        tipo_seguro : {type:String},
        aseguradora : {type:String},
        valor: {type:Number},
        descripcion: {type:String},
    },
    createdAt :{ type : Date , default : Date.now}
})
export default mongoose.model("Conductor",conductorSchema)