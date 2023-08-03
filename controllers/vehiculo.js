// put ingresar vehiculo
// get listar todos los vehiculo
// get buscar 1 vehiculo
// post actualizar { todo excepto matricula }
import Vehiculo from "../models/vehiculo.js";

const httpVehiculo = {
  postVehiculo: async (req, res) => {
    const {matricula,placa, num_vehiculo, propietario,puestos, conductor_id, revision_id,estado } =
      req.body;
    const vehiculo = await Vehiculo({
      matricula,
      placa,
      num_vehiculo,
      propietario,
      puestos,
      conductor_id,
      revision_id,
      estado
    });
    await vehiculo.save();
    res.json({
      mensaje: "1 registro insertado!!",
      vehiculo,
    });
  },
  getVehiculo: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.find()
      .populate("conductor_id","nombre")
      .populate("revision_id","tecnomecanica")
      res.json(vehiculos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al obtener los vehículos" });
    }
  },
  getVehiculoId: async (req, res) => {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findById({ _id: id })
    if (vehiculo) {
      console.log(vehiculo);
      res.json({ vehiculo });
    } else {
      res.json({ mensaje: `${_id} no encontrado` });
    }
  },
  putVehiculo: async (req, res) =>{
    const id= req.params.id;
    const vehiculoActualizado={
      matricula:req.body.matricula,
      placa:req.body.placa,
      num_vehiculo : req.body.num_vehiculo,
      propietario : req.body.propietario,
      puestos:req.body.puestos,
      conductor_id:req.body.conductor_id,
      revision_id:req.body.revision_id
    }
    try {
      const buscarVehiculo= await Vehiculo.findByIdAndUpdate(id,vehiculoActualizado);
      if(buscarVehiculo){
        res.json(buscarVehiculo)
      }else{
        res.json({"mensaje":`El vehiculo con ${id} no se encuentra en la base de datos`})
      }
    } catch (error) {
      res.json({"mensaje":"error al actualizar el vehiculo",error})
    }
  },
  patchVehiculo: async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;
    try {
      const vehiculo = await Vehiculo.findById(id);
      if (vehiculo) {
        vehiculo.estado = estado;
        await vehiculo.save();
        res.json(vehiculo);
      } else {
        console.log(`id: ${id} no encontrado`);
        res.status(404).json({ mensaje: `vehiculo con id: ${id} no encontrado` });
      }
    } catch (error) {
      console.log(`Error al actualizar el vehiculo: ${error}`);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  deleteVehiculo: async (req, res) => {
    const { id } = req.params;
    const eliminado = await Vehiculo.findOneAndDelete({ _id: id });
    
    if (eliminado) {
      res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
    } else {
      res.json({ mensaje: `${id} no se encuentra en la base de datos` });
    }
  }
};
export default httpVehiculo;