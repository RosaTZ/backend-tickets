// post actualizar { todo excepto cedula }
//  empresa

import Empresa from "../models/empresa.js"
const httpEmpresa = {
    postEmpresa:async (req, res) => {
      const { nombre,nit, direccion,telefono,propietario} = req.body
      const empresa = await Empresa({ nombre,nit, direccion,telefono,propietario })
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
    getEmpresaId:async (req, res) => {
      const  {id}  = req.params
      const empresa = await Empresa.findById({ _id: id })
      if(empresa){
        console.log(empresa);
        res.json({ empresa })
      }else{
        res.json({mensaje:`${id} no encontrado`})
      }
    },
    putEmpresa: async (req, res) => {
        const id = req.body.id;
        const buscarEmpresa = await Empresa.findByIdAndUpdate({_id:id});
        if (buscarEmpresa) {
          (buscarEmpresa.nombre = req.body.nombre),
            (buscarEmpresa.direccion = req.body.direccion),
            (buscarEmpresa.telefono = req.body.telefono),
            (buscarEmpresa.propietario = req.body.propietario),
            await buscarEmpresa.save()
          res.json({ buscarEmpresa });
        } else {
          res.json({
            mensaje: `La empresa con nit: ${id} no se encuentra en la base de datos`,
          });
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