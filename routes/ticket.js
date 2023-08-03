import httpTicket from "../controllers/ticket.js"
import { Router } from "express"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import { check } from "express-validator"
import {validarCampos} from "../middlewares/validar-campos.js"

const router = Router()

  router.post("/",[
    check("codigo","campo codigo requerido").not().isEmpty(),
    check("fecha_venta","Fecha de la venta requerida").not().isEmpty().isDate(),
    check("fecha_salida","Fecha salida requerida").not().isEmpty().isDate(),
    check("numero_puesto","Numero de puesto requerido").not().isEmpty(),
    check("hora_salida","Debe ingresar la hora de salida").not().isEmpty(),
    check("duracion","Ingrese el tiempo aproximado de viaje").not().isEmpty(),
    check("cliente",'No es un ID válido').isMongoId(),
    check("vehiculo",'No es un ID válido').isMongoId(),
    check("ruta",'No es un ID válido').not().isMongoId(),
    // check("empresa").custom(httpTicket.existeHolderById),
    check("empresa",'No es un ID válido').isMongoId(),
    validarCampos
  ], httpTicket.postTicket)

  router.get("/", httpTicket.getTicket)
  
  router.get("/:id", httpTicket.getTicketId)
  
  router.put("/:id", httpTicket.putTicket)

  router.delete("/:id", httpTicket.deleteTicket)
  
  export default router