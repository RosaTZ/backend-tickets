// put ingresar conductore
// get listar todos los conductores
// get buscar 1 conductor
// post actualizar { todo excepto cedula, Licencia }
import Conductor from "../models/conductor.js"

const httpConductor = {
    postConductor: async (req, res) => {
      const { cedula,nombre, apellidos, telefono, licencia,categoria_licencia,fecha_vencimiento, 
        fecha_nacimiento, direccion, estado_civil,estado, seguro:{tipo_seguro, aseguradora, valor, descripcion}} = req.body
      const conductor = await Conductor({  cedula,nombre, apellidos, telefono, licencia,categoria_licencia,fecha_vencimiento, 
        fecha_nacimiento, direccion, estado_civil,estado, seguro:{tipo_seguro, aseguradora, valor, descripcion}})
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
    putConductor: async (req,res)=>{
const id=req.params.id;
const conductorActualizado={
  telefono : req.body.telefono,
  licencia : req.body.licencia,
  direccion : req.body.direccion,
  estado_civil : req.body.estado_civil,
}
try {
  const buscarConductor= await Conductor.findByIdAndUpdate(id,conductorActualizado);
if(buscarConductor){
  res.json(buscarConductor)
}else{
  res.json({"mensaje":`El conductor con ${id} no se encuentra en la base de datos`})
}
} catch (error) {
  res.json({"mensaje":"Error al actualizar cliente", error})
}
    },
    patchConductor: async (req, res) => {
      const id = req.params.id;
      const { estado } = req.body;
      try {
        const conductor = await Conductor.findById(id);
        if (conductor) {
          conductor.estado = estado;
          await conductor.save();
          res.json(conductor);
        } else {
          console.log(`id: ${id} no encontrado`);
          res.status(404).json({ mensaje: `conductor con id: ${id} no encontrado` });
        }
      } catch (error) {
        console.log(`Error al actualizar el conductor: ${error}`);
        res.status(500).json({ error: "Error interno del servidor" });
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