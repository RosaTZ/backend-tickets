import { check } from "express-validator"
import httpAdministrador from "../controllers/administrador.js"
import { Router } from "express"

const router= Router()

  router.post("/",httpAdministrador.postAdministrador)

  // router.post("/login",httpAdministrador.login)

  router.post("/token",httpAdministrador.postAdministradorToken)
  
  // router.put("/:id",httpAdministrador.putAdministrador)
  

  export default router