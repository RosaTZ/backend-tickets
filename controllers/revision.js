// put ingresar estado vehiculo
// get buscar la matricula y acceder al estado 
// post actualizar { todo }
import Revision from '../models/revision.js'

const httpRevisiones = {
    postRevisiones:async (req, res) => {
      const { tecnomecanica,fecha_revision,fecha_proxima_revision,descripcion,estado} = req.body
      const revision =await Revision({ tecnomecanica,fecha_revision,fecha_proxima_revision,descripcion,estado })
      await revision.save()
      res.json({
        revision
      })
    },
    getRevisiones:async (req, res) => {
      const buscar= await Revision.find()
  res.json({buscar})
  // console.log(buscar);
    },
    getRevisionesId:async (req, res) => {
      const  {id}  = req.params
      const revision = await Revision.findById({ _id: id })
      if(revision){
        console.log(revision);
        res.json({ revision })
      }else{
        res.json({mensaje:`${id} no encontrado`})
      }
    },
    putRevisiones: async (req,res) =>{
      const id = req.params.id
      const revisionActualizada={
        tecnomecanica : req.body.tecnomecanica,
        fecha_proxima_revision : req.body.fecha_proxima_revision
      }
      try {
        const buscarRevision= await Revision.findByIdAndUpdate(id, revisionActualizada);
        if(buscarRevision){
          res.json(buscarRevision)
        }else{
          res.json({"mensaje":`La revisión con id ${id} no se encuentra en la base de datos`})
        }
      } catch (error) {
        res.json({"mensaje":"error al actualizar la revisión",error})
      }
    },
      deleteRevision: async (req, res) => {
        const { id } = req.params;
        const eliminado = await Revision.findOneAndDelete({ _id: id });
        
        if (eliminado) {
          res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
        } else {
          res.json({ mensaje: `${id} no se encuentra en la base de datos` });
        }
      }
}
  export default httpRevisiones;