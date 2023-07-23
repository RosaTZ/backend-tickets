import { check } from "express-validator"
import httpCliente from "../controllers/cliente.js"
import { Router } from "express"

const router= Router()

  router.post("/",[
    check("cedula","campo requerido").notEmpty().isLength({min:8, max:10}),
    check("nombre","campo requerido").notEmpty(),
    check("apellidos","campo requerido").notEmpty(),
    check("telefono","campo requerido").notEmpty()
  ], httpCliente.postCliente)

  router.get("/", httpCliente.getCliente)
  
  router.get("/:cedula",httpCliente.getClienteCedula)
  
  router.put("/:cedula",httpCliente.putCliente)
  
  router.delete("/:id",httpCliente.deleteCliente)

  export default router