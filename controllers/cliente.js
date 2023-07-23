// put ingresar usuarios
// get listar todos los usuarios
// get buscar 1 usuario
// post actualizar usuario

import Cliente from "../models/cliente.js"

const httpCliente = {
    postCliente:async (req, res) => {
      const { cedula,nombre,apellidos,telefono } = req.body
      const cliente = await Cliente({ cedula,nombre,apellidos,telefono })

      // const salt = bcryptjs.genSaltSync();
      // cliente.cedula = bcryptjs.hashSycn(password,salt)

      await cliente.save()
      res.json({cliente})
    },
    getCliente:async(req,res)=>{
const buscar= await Cliente.find()
res.json({buscar})
console.log(buscar);
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
    putCliente: async (req, res) => {
      const cedula = req.body.cedula;
      const clienteEncontrado = await Cliente.findOneAndUpdate({cedula:cedula});
      if (clienteEncontrado) {
        clienteEncontrado.telefono = req.body.telefono;
        await clienteEncontrado.save()
        res.json({ clienteEncontrado });
        console.log(clienteEncontrado);
      } else {
        res.json({
          mensaje: `El usuario: ${cedula} no se encuentra en la base de datos`,
        });
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
    }
    }

   
  export default httpCliente;