// post actualizar { todo excepto cedula }
//  empresa

import Empresa from "../models/empresa.js"
const httpEmpresa = {
    postEmpresa:async (req, res) => {
      const { nombre,nit, direccion,telefono,correo,horario,mision,vision,slogan,servicios} = req.body
      const empresa = await Empresa({ nombre,nit, direccion,telefono,correo,horario,mision,vision,slogan,servicios })
      await empresa.save()
      res.json({
        empresa
      })
    },
    getEmpresa:async (req, res) => {
      const buscar= await Empresa.find()
      res.json({buscar})
      console.log(buscar);
    },
    getEmpresaNit:async (req, res) => {
      const  {nit}  = req.params
      const empresa = await Empresa.find({nit: nit})
      if(empresa){
        console.log(empresa);
        res.json({ empresa })
      }else{
        res.json({mensaje:`${nit} no encontrado`})
      }
    },
    putEmpresa: async (req, res) => {
      const id = req.params.id;
      const empresaActualizada = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        propietario: req.body.propietario,
      };
    
      try {
        const buscarEmpresa = await Empresa.findByIdAndUpdate(id, empresaActualizada);
        if (buscarEmpresa) {
          res.json({ buscarEmpresa });
        } else {
          res.json({
            mensaje: `La empresa con nit: ${id} no se encuentra en la base de datos`,
          });
        }
      } catch (error) {
        res.status(500).json({ mensaje: "Hubo un error al actualizar la empresa",error });
      }
    },
    
      deleteEmpresa: async (req, res) => {
        const { id } = req.params;
        const eliminado = await Empresa.findOneAndDelete({ _id: id });
        
        if (eliminado) {
          res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
        } else {
          res.json({ mensaje: `${id} no se encuentra en la base de datos` });
        }
      }
}
  export default httpEmpresa;