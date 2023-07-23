import { check } from "express-validator"
import httpAdministrador from "../controllers/administrador.js"
import { Router } from "express"

const router= Router()

  router.get("/", httpAdministrador.getAdministrador)
  
  router.get("/:id",httpAdministrador.getAdministradorId)
  
  router.put("/:id",httpAdministrador.putAdministrador)
  
  router.delete("/:id",httpAdministrador.deleteAdministrador)

  export default router