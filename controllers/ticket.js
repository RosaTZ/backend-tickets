// put ingresar tikete
// get listar todos los tiketes
// get buscar 1 tikete
import Ticket from "../models/ticket.js"

const httpTicket = {
    postTicket: async(req, res) => {
      const { codigo, fecha_venta,fecha_salida} = req.body
      const ticket = await Ticket({ codigo, fecha_venta,fecha_salida })
      await ticket.save()
      res.json({
        mensaje: "1 registro insertado!!",
        ticket
      })
    },
    getTicket:async (req, res) => {
      const buscar= await Ticket.find()
      res.json({buscar})
      console.log(buscar);
    },
    getTicketId:async (req, res) => {
      const  {_id}  = req.params
      const ticket = await Ticket.findById({ _id: id })
      if(ticket){
      console.log(ticket);
      res.json({ ticket })
      }else{
      res.json({mensaje:`${_id} no encontrado`})
      }
    },
    putTicket: async (req, res) => {
        const id = req.body.id;
        const buscarTicket = await Ticket.findOneAndUpdate({_id:id});
        if (buscarTicket) {
          console.log(buscarTicket);
          (buscarTicket.fecha_salida = req.body.fecha_salida),
          buscarTicket.save()
          res.json({ buscarTicket });
        } else {
          res.json({
            mensaje: `El ticket: ${id} no se encuentra en la base de datos`,
          });
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