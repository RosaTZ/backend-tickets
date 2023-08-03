// put ingresar tikete
// get listar todos los tiketes
// get buscar 1 tikete
import Ticket from "../models/ticket.js"

const httpTicket = {
    postTicket: async(req, res) => {
      const { codigo, fecha_venta,fecha_salida,hora_salida,duracion,cliente,vehiculo,ruta,empresa,numero_puesto} = req.body
      const ticket = await Ticket({ codigo, fecha_venta,fecha_salida,hora_salida,duracion,cliente,vehiculo,ruta,empresa,numero_puesto })
      await ticket.save()
      res.json({
        mensaje: "1 registro insertado!!",
        ticket
      })
    },
    getTicket:async (req, res) => {
      const buscar= await Ticket.find()
      .populate("cliente","nombre")
      .populate("vehiculo","matricula")
      .populate("ruta","origen","destino")
      .populate("empresa","nombre")
      res.json({buscar})
      console.log(buscar);
    },
    getTicketId:async (req, res) => {
      const  {id}  = req.params
      const ticket = await Ticket.findById({ _id: id })
      if(ticket){
      console.log(ticket);
      res.json({ ticket })
      }else{
      res.json({mensaje:`${_id} no encontrado`})
      }
    },
    putTicket: async (req,res)=>{
     const id= req.params.id;
     const ticketActualizado={
      fecha_salida : req.body.fecha_salida,
      numero_puesto: req.body.numero_puesto
     }
     try {
      const buscarTicket= await Ticket.findByIdAndUpdate(id,ticketActualizado);
      if(buscarTicket){
        res.json(buscarTicket)
      }else{
        res.json({"mensaje":`El ticket con id ${id} no se encuentra en la base de datos`})
      }
     } catch (error) {
      res.json({"mensaje":"error al actualizar ticket", error})
     }
    },
      deleteTicket: async (req, res) => {
        const { id } = req.params;
        const eliminado = await Ticket.findOneAndDelete({ _id: id });
        
        if (eliminado) {
          res.json({ mensaje: `Se eliminó ${id} de la base de datos` });
        } else {
          res.json({ mensaje: `${id} no se encuentra en la base de datos` });
        }
      }
    }
  export default httpTicket;