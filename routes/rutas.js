import { check } from "express-validator"
import httpRutas from "../controllers/rutas.js"
import { Router } from "express"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import {validarCampos} from "../middlewares/validar-campos.js"

const router= Router()
  
  router.post("/",[
    check("codigo","Campo codigo requerido").not().isEmpty(),
    check("codigo","El codigo no puede ser mayor a 5 digitos").isLength({min:2,max:5}),
    check("origen","Complete el campo origen").not().isEmpty(),
    check("destino","Complete el campo destino").not().isEmpty(),
    validarCampos
  ], httpRutas.postRutas)

  router.get("/",httpRutas.getRutas)
  
  router.get("/:id",httpRutas.getRutasId)
  
  router.put("/:id",httpRutas.putRutas)

  router.patch("/:id",httpRutas.patchRuta)

  router.delete("/:id",httpRutas.deleteRuta)
  
  export default router