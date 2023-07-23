import { check } from "express-validator"
import httpVendedor from "../controllers/vendedor.js"
import { Router } from "express"

const router= Router()

  router.get("/", httpVendedor.getVendedor)
  
  router.get("/:id",httpVendedor.getVendedor)
  
  router.put("/:id", httpVendedor.putVendedor)

  router.delete("/:id", httpVendedor.deleteVendedor)
  
  export default router