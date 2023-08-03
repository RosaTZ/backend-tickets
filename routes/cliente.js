import { check } from "express-validator"
import httpCliente from "../controllers/cliente.js"
import { Router } from "express"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import {validarCampos} from "../middlewares/validar-campos.js"

const router= Router()

  router.post("/",[
    check("cedula","Falta la cedula").not().isEmpty(),
    check("cedula","La cedula debe ser mayor a 7 caracteres y menor de 10 caracteres").isLength({min:8,max:10}),
    check("nombre","Nombre requerido").not().isEmpty(),
    check("apellidos","Apellido requerido").not().isEmpty(),
    check("telefono","Telefono requerido").not().isEmpty().isMobilePhone(),
    check("telefono","Numero telefono invalido").isLength({min:10,max:15}),
    validarCampos
  ] ,httpCliente.postCliente)

  router.get("/",httpCliente.getCliente)
  
  router.get("/:cedula",httpCliente.getClienteCedula)
  
  router.put("/:id",httpCliente.putCliente)

  router.patch("/:id",httpCliente.patchCliente)
  
  router.delete("/:id",httpCliente.deleteCliente)

  export default router