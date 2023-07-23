import Administrador from "../models/administrador.js";

const httpAdministrador = {
  getAdministrador: async (req, res) => {
    res.json({ Administrador });
  },
  getAdministradorId: async (req, res) => {
    const { _id } = req.params;
    const administrador = await Administrador.findById({ _id: id })
    if (administrador) {
      console.log(administrador);
      res.json({ administrador });
    } else {
      res.json({ mensaje: `${_id} no encontrado` });
    }
  },
  putAdministrador: async (req, res) => {
    const id = req.body.id;
    const buscarAdministrador = await Administrador.findOneAndUpdate({_id:id})
    if (buscarAdministrador) {
      console.log(buscarAdministrador);
      (buscarAdministrador.name = req.body.name),
        (buscarAdministrador.email = req.body.email)(
          (buscarAdministrador.telefono = req.body.telefono)
        ),
        (buscarAdministrador.passdword = req.body.passdword);
      buscarAdministrador.save();
      res.json({ buscarAdministrador });
    } else {
      res.json({
        mensaje: `La ruta: ${id} no se encuentra en la base de datos`,
      });
    }
  },
  deleteAdministrador: async (req, res) => {
    const { id } = req.params;
    const eliminado = await Administrador.findOneAndDelete({ _id: id });
    
    if (eliminado) {
      res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
    } else {
      res.json({ mensaje: `${id} no se encuentra en la base de datos` });
    }
  }
};
export default httpAdministrador;