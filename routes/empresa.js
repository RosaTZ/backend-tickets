import { check } from "express-validator"
import httpEmpresa from "../controllers/empresa.js"
import { Router } from "express"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import { validarCampos } from "../middlewares/validar-campos.js"

const router= Router()

  router.post("/",[
    check("nombre","campo requerido").not().isEmpty(),
    check("nit","campo requerido").not().not().isEmpty().isLength({min:9,max:15}),
    check("direccion", "campo requerido").not().isEmpty(),
    check("telefono", "campo requerido").not().isEmpty(),
    check("propietario","campo requerido").default(),validarCampos
  ] ,httpEmpresa.postEmpresa)

  router.get("/",httpEmpresa.getEmpresa)
  
  router.get("/:nit",httpEmpresa.getEmpresaNit)

  router.put("/:id",httpEmpresa.putEmpresa)
  
  router.delete("/:id",httpEmpresa.deleteEmpresa)

  export default router