import mongoose from "mongoose"

const empresaSchema=new mongoose.Schema({
    nombre :{type:String,require:true},
    nit :{type:String,require:true, unique : true},
    direccion : {type:String,require:true},
    telefono:{type:String, require:true},
    propietario :{ type:String , require : true , default: "empresa viajes"},
    createdAt :{ type : Date , default : Date.now}
})

export default mongoose.model("Empresa",empresaSchema)