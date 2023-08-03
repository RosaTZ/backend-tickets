// put ingresar usuarios
// get listar todos los usuarios
// get buscar 1 usuario
// post actualizar usuario

import Cliente from "../models/cliente.js"

const httpCliente = {
    postCliente:async (req, res) => {
      const { cedula,nombre,apellidos,telefono,estado } = req.body
      const cliente = await Cliente({ cedula,nombre,apellidos,telefono,estado })
      await cliente.save()
      res.json({cliente})
    },
    getCliente:async(req,res)=>{
const buscar= await Cliente.find()
res.json({buscar})
// console.log(buscar);
    },
      getClienteCedula:async (req, res) => {
        const  {cedula}  = req.params
        const cliente = await Cliente.find({ cedula: cedula })
        if(cliente){
          console.log(cliente);
          res.json({ cliente })
        }else{
          res.json({mensaje:`${cedula} no encontrado`})
        }
      },
   putCliente: async(req, res)=>{
    const id =req.params.id;
    const clienteActualizado={
      telefono : req.body.telefono
    }
    try {
      const buscarCliente= await Cliente.findByIdAndUpdate(id,clienteActualizado)
      if(buscarCliente){
        res.json(buscarCliente)
      }else{
        res.json({"mensaje:" : `El cliente con ${id} no se encuentra en la base de datos`})
      }
    } catch (error) {
      res.json({"mensaje":"hubo un error al actualizar el cliente", error})
    }
   },
   patchCliente: async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;
    try {
      const cliente = await Cliente.findById(id);
      if (cliente) {
        cliente.estado = estado;
        await cliente.save();
        res.json(cliente);
      } else {
        console.log(`id: ${id} no encontrado`);
        res.status(404).json({ mensaje: `Cliente con id: ${id} no encontrado` });
      }
    } catch (error) {
      console.log(`Error al actualizar el cliente: ${error}`);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
    deleteCliente: async (req, res) => {
      const { id } = req.params;
      const clienteEliminado = await Cliente.findOneAndDelete({ _id: id });
      
      if (clienteEliminado) {
        res.json({ mensaje: `Se eliminó el Cliente: ${id} de la base de datos` });
      } else {
        res.json({ mensaje: `El Cliente: ${id} no se encuentra en la base de datos` });
      }
    },
    existeHolderById: async (id, req) => {
      const existe = await Holder.findById(id)
    
      if (!existe) {
          throw new Error(`El id no existe ${id}`)
      }
      req.req.holderUpdate = existe
    },
    }

   
  export default httpCliente;