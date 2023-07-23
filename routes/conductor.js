import httpConductor from "../controllers/conductor.js"
import { Router } from "express"
import { check } from "express-validator"
const router= Router()
  
  router.post("/",[
   check("cedula","La cedula es obligatoria").notEmpty().isLength({min:8, max:10}),
   check("nombre","El nombre es obligatorio").notEmpty(),
   check("apellidos","Los apellidos son obligatorios").notEmpty(),
   check("telefono","El telefono es obligatorio").notEmpty(),
   check("licencia","La licencia es obligatoria").notEmpty(),
   check("fecha_nacimiento","campo requerido").notEmpty().isDate(),
   check("direccion","campo requerido").notEmpty(),
   check("estado_civil","campo requerido").notEmpty(),
   check("seguro","El seguro es obligatorio").notEmpty() 
 ] , httpConductor.postConductor)

  router.get("/",httpConductor.getConductor)
  
  router.get("/:cedula",httpConductor.getConductorCedula)
  
  router.put("/:cedula",httpConductor.putConductor)
  
  router.delete("/:id",httpConductor.deleteConductor)

  export default router