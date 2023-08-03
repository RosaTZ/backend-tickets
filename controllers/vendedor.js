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
    putVendedor: async (req,res)=>{
      const id= req.params.id;
      const vendedorActualizado={
        nombre : req.body.nombre,
        email : req.body.email,
        telefono : req.body.telefono,
        password : req.body.passdword
      }
      try {
        const buscarVendedor= await Vendedor.findByIdAndUpdate(id,vendedorActualizado);
        if(buscarVendedor){
          res.json(buscarVendedor)
        }else{
          res.json({"mensaje":`El vendedor con ${id} no se encuentra en la base de datos`})
        }
      } catch (error) {
        res.json({"mensaje":"Error al actualizar el vendedor", error})
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