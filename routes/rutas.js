import { check } from "express-validator"
import httpRutas from "../controllers/rutas.js"
import { Router } from "express"

const router= Router()
  
  router.post("/",[
    check("codigo","Campo requerido").notEmpty(),
    check("origen","Campo requerido").notEmpty(),
    check("destino","Campo requerido").notEmpty(),
    check("salida","Campo requerido").notEmpty().isDate(),
    check("tiempo","Campo requerido").notEmpty().isDate()
  ], httpRutas.postRutas)

  router.get("/",httpRutas.getRutas)
  
  router.get("/:id",httpRutas.getRutasId)
  
  router.put("/:id",httpRutas.putRutas)

  router.delete("/:id",httpRutas.deleteRuta)
  
  export default router