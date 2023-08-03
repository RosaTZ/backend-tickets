import httpConductor from "../controllers/conductor.js"
import { Router } from "express"
import { check } from "express-validator"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import {validarCampos} from "../middlewares/validar-campos.js"
const router= Router()
  
  router.post("/",[
   check("cedula","La cedula es obligatoria").not().isEmpty(),
   check("cedula","La cedula debe ser mayor a a 7 caracteres  y menor de 10 caracteres").isLength({min:8,max:10}),
   check("nombre","El nombre es obligatorio").not().isEmpty(),
   check("apellidos","Los apellidos son obligatorios").not().isEmpty(),
   check("telefono","El telefono es obligatorio").not().isEmpty(),
   check("licencia","La licencia es obligatoria").not().isEmpty(),
   check("licencia","El número de la licencia de conducción debe ser de 12 digitos").isLength({min:12,max:12}),
   check("categoria_licencia","Categoria de la licencia requerida").not().isEmpty(),
   check("categoria_licencia","Las categorias de licencia estan compuestas por dos digitos").isLength({min:2,max:2}),
   check("fecha_vencimiento","Fecha de vencimiento de la licencia requerida").not().isEmpty().isDate(),
   check("fecha_nacimiento","Fecha de nacimiento requerida").not().isEmpty().isDate(),
   check("direccion","Direccion requerida").not().isEmpty(),
   check("estado_civil","Estado civil requerido").not().isEmpty(),
   check("seguro","El seguro es obligatorio").not().isEmpty() , validarCampos
 ] , httpConductor.postConductor)

  router.get("/",httpConductor.getConductor)
  
  router.get("/:cedula",httpConductor.getConductorCedula)
  
  router.put("/:id",httpConductor.putConductor)

  router.patch("/:id",httpConductor.patchConductor)
  
  router.delete("/:id",httpConductor.deleteConductor)

  export default router