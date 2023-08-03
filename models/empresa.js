import mongoose from "mongoose"

const empresaSchema=new mongoose.Schema({
    nombre :{type:String,require:true},
    nit :{type:String,require:true, unique:true},
    direccion : {type:String,require:true},
    telefono:{type:String, require:true},
    correo:{type:String, require:true},
    horario:{type:String, require:true},
    mision:{type:String, require:true},
    vision:{type:String, require:true},
    slogan:{type:String, require:true},
    servicios:{type:String, require:true},
    createdAt :{ type : Date , default : Date.now}
})

export default mongoose.model("Empresa",empresaSchema)