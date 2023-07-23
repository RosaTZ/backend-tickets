// put ingresar conductore
// get listar todos los conductores
// get buscar 1 conductor
// post actualizar { todo excepto cedula, Licencia }
import Conductor from "../models/conductor.js"

const httpConductor = {
    postConductor: async (req, res) => {
      const { cedula,nombre, apellidos, telefono, licencia, 
        fecha_nacimiento, direccion, estado_civil, seguro:{tipo_seguro, aseguradora, valor, descripcion}} = req.body
      const conductor = await Conductor({ cedula,nombre, apellidos, telefono, licencia, 
        fecha_nacimiento, direccion, estado_civil, seguro:{tipo_seguro, aseguradora, valor, descripcion}})
      await conductor.save()
      res.json({
        mensaje: "1 registro insertado!!",
        conductor
      })
    },
    getConductor:async (req, res) => {
      const buscar= await Conductor.find()
      res.json({buscar})
      console.log(buscar);
    },
    getConductorCedula:async (req, res) => {
      const  {cedula}  = req.params
      const conductor = await Conductor.find({ cedula: cedula })
      if(conductor){
        console.log(conductor);
        res.json({ conductor })
      }else{
        res.json({mensaje:`${cedula} no encontrado`})
      }
    },
    putConductor: async (req, res) => {
        const cedula = req.body.cedula;
        const buscarConductor = await Conductor.findOneAndUpdate({cedula:cedula});
        if (buscarConductor) {
          console.log(buscarConductor);
          (buscarConductor.nombre = req.body.nombre),
            (buscarConductor.apellidos = req.body.apellidos),
            (buscarConductor.telefono = req.body.telefono),
            (buscarConductor.licencia = req.body.licencia),
            (buscarConductor.direccion = req.body.direccion),
            (buscarConductor.estado_civil = req.body.estado_civil),
            await buscarConductor.save()
          res.json({ buscarConductor });
        } else {
          res.json({
            mensaje: `El conductor con cedula: ${cedula} no se encuentra en la base de datos`,
          });
        }
      },
      deleteConductor: async (req, res) => {
        const { id } = req.params;
        const eliminado = await Conductor.findOneAndDelete({ _id: id });
        
        if (eliminado) {
          res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
        } else {
          res.json({ mensaje: `${id} no se encuentra en la base de datos` });
        }
      }
}
  export default httpConductor;