import mongoose from "mongoose";

const conductorSchema=new mongoose.Schema({
    cedula:{type:String,require:true,minlength:8,maxlength:10},
    nombre :{type:String,require:true},
    apellidos :{type:String,require:true},
    telefono : {type:String,require:true},
    licencia : {type:String,require:true},
    fecha_nacimiento:{type:Date,require:true},
    direccion : {type:String,require:true},
    estado_civil : {type:String,require:true},
    seguro:{
        tipo_seguro : {type:String,require:true},
        aseguradora : {type:String,require:true},
        valor: {type:Number,require:true},
        descripcion: {type:String}
    },
    createdAt :{ type : Date , default : Date.now}
})
export default mongoose.model("Conductor",conductorSchema)