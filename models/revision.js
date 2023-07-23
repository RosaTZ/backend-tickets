import mongoose from "mongoose"

const revisionSchema=new mongoose.Schema({
    tecnomecanica :{type: Number , require: true},
    fecha_revision :{type:Date, require: true},
    fecha_proxima_revision :{type:Date, require: true},
    descripcion : { type : String , require : false , default : "ok"},
    createdAt :{ type : Date , default : Date.now},
})

export default mongoose.model("Revision",revisionSchema)