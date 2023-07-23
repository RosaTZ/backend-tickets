import Vendedor from "../models/vendedor.js"

const httpVendedor = {
    getVendedor:async (req, res) => {
      const buscar= await Vendedor.find()
res.json({buscar})
console.log(buscar);
    },
    getVendedorId:async (req, res) => { 
      const  {_id}  = req.params
      const vendedor = await Vendedor.findById({ _id: id })
      if(vendedor){
      console.log(vendedor);
      res.json({ vendedor })
      }else{
      res.json({mensaje:`${_id} no encontrado`})
      }
    },
    putVendedor: async (req, res) => {
        const id = req.body.id;
        const buscarVendedor = await Vendedor.findOneAndUpdate({_id:id});
        if (buscarVendedor) {
          console.log(buscarVendedor);
          (buscarVendedor.nombre = req.body.nombre),
          (buscarVendedor.email = req.body.email)
          (buscarVendedor.telefono = req.body.telefono),
          (buscarVendedor.password = req.body.passdword)
            buscarVendedor.save()
          res.json({ buscarVendedor });
        } else {
          res.json({
            mensaje: `La ruta: ${id} no se encuentra en la base de datos`,
          });
        }
      },
      deleteVendedor: async (req, res) => {
        const { id } = req.params;
        const eliminado = await Vendedor.findOneAndDelete({ _id: id });
        
        if (eliminado) {
          res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
        } else {
          res.json({ mensaje: `${id} no se encuentra en la base de datos` });
        }
      
      }
}
  export default httpVendedor;