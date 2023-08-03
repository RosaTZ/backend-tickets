import { check } from "express-validator"
import httpRevision from "../controllers/revision.js"
import { Router } from "express"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import {validarCampos} from "../middlewares/validar-campos.js"

const router= Router()
  
  router.post("/", [
    check("tecnomecanica","Tecnomecanica requerida").not().isEmpty(),
    check("fecha_revision","Fecha de la ultima revisión requerida").not().isEmpty().isDate(),
    check("fecha_proxima_revision","Fecha de la proxima revision requerida").not().isEmpty().isDate(),
    check("descripcion","Complete la descripción").default(),validarCampos
  ],httpRevision.postRevisiones)

  router.get("/",httpRevision.getRevisiones)
  
  router.get("/:id",httpRevision.getRevisionesId)
  
  router.put("/:id",httpRevision.putRevisiones)

  router.delete("/:id", httpRevision.deleteRevision)
  
  export default router