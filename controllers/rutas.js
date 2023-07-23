// put ingresar rutas
// get listar todos las rutas
// get buscar 1 ruta
// post actualizar { todo excepto cedula, Licencia }
// delete para eliminar una ruta
import Ruta from "../models/rutas.js"

const httpRutas = {
    postRutas:async (req, res) => {
      const { codigo, origen,destino, salida, tiempo} = req.body
      const ruta =await Ruta ({ codigo, origen,destino, salida, tiempo })
      await ruta.save()
      res.json({
        mensaje: "1 registro insertado!!",
        ruta
      })
    },
    getRutas:async (req, res) => {
      const buscar= await Ruta.find()
      res.json({buscar})
      console.log(buscar);
    },
    getRutasId:async (req, res) => { 
      const  {_id}  = req.params
  const ruta = await Ruta.findById({ _id: id })
  if(ruta){
    console.log(ruta);
    res.json({ ruta })
  }else{
    res.json({mensaje:`${_id} no encontrado`})
  }
    },
    putRutas: async (req, res) => {
        const id = req.body.id;
        const buscarRuta = await Ruta.findOneAndUpdate({_id:id});
        if (buscarRuta) {
          console.log(buscarRuta);
          (buscarRuta.origen = req.body.origen),
            (buscarRuta.destino = req.body.destino),
            (buscarRuta.salida = req.body.salida),
            (buscarRuta.tiempo = req.body.tiempo)
            buscarRuta.save()
          res.json({ buscarRuta });
        } else {
          res.json({
            mensaje: `La ruta: ${id} no se encuentra en la base de datos`,
          });
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
      }
      }

  export default httpRutas;