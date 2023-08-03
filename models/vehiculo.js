import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
  matricula: { type: String, unique: true },
  placa:{type: String},
  num_vehiculo: { type: String, unique: true },
  propietario: { type: String, default: "empresa viajes" },
  estado:{type:Number, default:1},
  puestos:{type:Number},
  createdAt: { type: Date, default: Date.now },
  conductor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Conductor", require:true },
  revision_id: { type: mongoose.Schema.Types.ObjectId, ref: "Revision", require:true }
});

export default mongoose.model("Vehiculo", vehiculoSchema);