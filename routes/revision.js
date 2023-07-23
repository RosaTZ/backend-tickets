import { check } from "express-validator"
import httpRevision from "../controllers/revision.js"
import { Router } from "express"

const router= Router()
  
  router.post("/", [
    check("tecnomecanica","campo obligatorio").notEmpty(),
    check("fecha_revision","campo requerido").notEmpty().isDate(),
    check("fecha_proxima_revision","Campo requerido").notEmpty().isDate(),
    check("descripcion").default()
  ],httpRevision.postRevisiones)

  router.get("/",httpRevision.getRevisiones)
  
  router.get("/:id",httpRevision.getRevisionesId)
  
  router.put("/:id",httpRevision.putRevisiones)

  router.delete("/:id", httpRevision.deleteRevision)
  
  export default router