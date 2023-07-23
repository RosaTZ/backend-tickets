import mongoose from "mongoose"

const vendedorSchema=new mongoose.Schema({
    nombre:{type:String,require:true},
    email : {type:String,require:true,unique: true},
    telefono  : {type:String,require:true},
    password  : {type:String,require:true},
    createdAt :{ type : Date , default : Date.now},
})

export default mongoose.model("Vendedor", vendedorSchema)