import { check } from "express-validator"
import httpEmpresa from "../controllers/empresa.js"
import { Router } from "express"

const router= Router()

  router.post("/",[
    check("nombre","campo requerido").notEmpty(),
    check("nit","campo requerido").notEmpty(),
    check("direccion", "campo requerido").notEmpty(),
    check("telefono", "campo requerido").notEmpty(),
    check("propietario","campo requerido").default()
  ] ,httpEmpresa.postEmpresa)

  router.get("/",httpEmpresa.getEmpresa)
  
  router.get("/:Id",httpEmpresa.getEmpresaId)

  router.put("/:id",httpEmpresa.putEmpresa)
  
  router.delete("/:id",httpEmpresa.deleteEmpresa)

  export default router