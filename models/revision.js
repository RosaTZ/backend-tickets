import mongoose from "mongoose"

const revisionSchema=new mongoose.Schema({
    tecnomecanica :{type: String , require: true},
    fecha_revision :{type:String, require: true},
    fecha_proxima_revision :{type:Date, require: true},
    descripcion : { type : String , require : false , default : "ok"},
    estado:{type:Number,require:true},
    createdAt :{ type : Date , default : Date.now},
})

export default mongoose.model("Revision",revisionSchema)