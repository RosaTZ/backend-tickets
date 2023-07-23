// put ingresar vehiculo
// get listar todos los vehiculo
// get buscar 1 vehiculo
// post actualizar { todo excepto matricula }
import Vehiculo from "../models/vehiculo.js";

const httpVehiculo = {
  postVehiculo: async (req, res) => {
    const { matricula, num_vehiculo, propietario, tarjeta_propiedad } =
      req.body;
    const vehiculo = await Vehiculo({
      matricula,
      num_vehiculo,
      propietario,
      tarjeta_propiedad,
    });
    await vehiculo.save();
    res.json({
      mensaje: "1 registro insertado!!",
      vehiculo,
    });
  },
  getVehiculo: async (req, res) => {
    const buscar = await Vehiculo.find();
    res.json({ buscar });
    console.log(buscar);
  },
  getVehiculoId: async (req, res) => {
    const { _id } = req.params;
    const vehiculo = await Vehiculo.findById({ _id: id });
    if (vehiculo) {
      console.log(vehiculo);
      res.json({ vehiculo });
    } else {
      res.json({ mensaje: `${_id} no encontrado` });
    }
  },
  putVehiculo: async (req, res) => {
    const id = req.body.id;
    const buscarVehiculo = await Vehiculo.findOneAndUpdate({_id:id})
    if (buscarVehiculo) {
      console.log(buscarVehiculo);
      (buscarVehiculo.propietario = req.body.propietario),
        (buscarVehiculo.num_vehiculo = req.body.num_vehiculo);
      buscarVehiculo.save();
      res.json({ buscarVehiculo });
    } else {
      res.json({
        mensaje: `El vehiculo: ${id} no se encuentra en la base de datos`,
      });
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