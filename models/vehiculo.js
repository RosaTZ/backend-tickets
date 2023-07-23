import mongoose from "mongoose"

const vehiculoSchema=new mongoose.Schema({
    matricula : {type:String,require:true,unique: true},
    num_vehiculo  : {type:String,require:true,unique: true},
    propietario : { type:String , require : true , default: "empresa viajes"},
    tarjeta_propiedad : {type:String, require:true},
    createdAt :{ type : Date , default : Date.now},
    conductor:{type:mongoose.Schema.Types.ObjectId,ref:'Conductor',require:true},
    revision:{type:mongoose.Schema.Types.ObjectId,ref:'Revision',require:true}
})

export default mongoose.model("Vehiculo",vehiculoSchema)