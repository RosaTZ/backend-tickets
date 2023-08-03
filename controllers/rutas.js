// put ingresar rutas
// get listar todos las rutas
// get buscar 1 ruta
// post actualizar { todo excepto cedula, Licencia }
// delete para eliminar una ruta
import Ruta from "../models/rutas.js";

const httpRutas = {
  postRutas: async (req, res) => {
    const { codigo, origen, destino, salida, tiempo, estado } = req.body;
    const ruta = await Ruta({ codigo, origen, destino, salida, tiempo, estado });
    await ruta.save();
    res.json({
      mensaje: "1 registro insertado!!",
      ruta,
    });
  },
  getRutas: async (req, res) => {
    const buscar = await Ruta.find();
    res.json({ buscar });
    console.log(buscar);
  },
  getRutasId: async (req, res) => {
    const { id } = req.params;
    const ruta = await Ruta.findById({ _id: id });
    if (ruta) {
      console.log(ruta);
      res.json({ ruta });
    } else {
      res.json({ mensaje: `${id} no encontrado` });
    }
  },
  putRutas: async (req, res) => {
    const id = req.params.id;
    const rutaActualizada = {
      origen: req.body.origen,
      destino: req.body.destino,
      salida: req.body.salida,
      tiempo: req.body.tiempo,
    };
    try {
      const buscarRuta= await Ruta.findByIdAndUpdate(id, rutaActualizada);
      if(buscarRuta){
        res.json(buscarRuta)
      }else{
        res.json({"mensaje":`La ruta con id ${id} no se encuentra en la base de datos`})
      }
    } catch (error) {
      res.json({"mensaje":"Error al actualizar la ruta",error})
    }
  },
  patchRuta: async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;
    try {
      const ruta = await Ruta.findById(id);
      if (ruta) {
        ruta.estado = estado;
        await ruta.save();
        res.json(ruta);
      } else {
        console.log(`id: ${id} no encontrado`);
        res.status(404).json({ mensaje: `ruta con id: ${id} no encontrado` });
      }
    } catch (error) {
      console.log(`Error al actualizar ruta: ${error}`);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  deleteRuta: async (req, res) => {
    const { id } = req.params;
    const eliminado = await Ruta.findOneAndDelete({ _id: id });

    if (eliminado) {
      res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
    } else {
      res.json({ mensaje: `${id} no se encuentra en la base de datos` });
    }
  },
};

export default httpRutas;