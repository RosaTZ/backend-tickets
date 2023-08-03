import mongoose from "mongoose"
const ticketSchema=new mongoose.Schema({
    codigo :{type:String,require:true, unique: true},
    fecha_venta :{type:Date, default:Date.now,require: true},
    fecha_salida :{type:Date, require: true},
    numero_puesto:{type:String,require:true},
    hora_salida:{type:Date,require:true},
    duracion:{type:Date,require:true},
    estado:{type:Number,default:1,require:true},
    createdAt :{ type : Date, default : Date.now},
    cliente:{type:mongoose.Schema.Types.ObjectId,ref:'Cliente',require:true},
    vehiculo:{type:mongoose.Schema.Types.ObjectId,ref:'Vehiculo',require:true},
    ruta:{type:mongoose.Schema.Types.ObjectId,ref:'Ruta',require:true},
    empresa:{type:mongoose.Schema.Types.ObjectId,ref:'Empresa',require:true}
})
export default mongoose.model("Tickete",ticketSchema)