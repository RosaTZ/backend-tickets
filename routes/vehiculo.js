import httpVehiculo from "../controllers/vehiculo.js"
import { Router } from "express"
import { check } from "express-validator"
// import {validarJWT} from "../middlewares/validar-jwt.js"
import {validarCampos} from "../middlewares/validar-campos.js"

const router= Router()
  
  router.post("/",[
    check("matricula","Matricula requerida").not().isEmpty(),
    check("matricula","La matricula debe tener 13 digitos").isLength({min:9,max:13}),
    check("placa","campo requerido").not().isEmpty(),
    check("placa","La placa debe tener 6 digitos").isLength({min:7,max:7}),
    check("num_vehiculo","Falta el numero del vehiculo").not().isEmpty(),
    check("num_vehiculo","El número del vehiculo debe tener minimo 3 digitos y maximo 4 digitos").isLength({min:3,max:4}),
    check("propietario","Ingrese el propietario del vehiculo").not().isEmpty(),
    check('estado',"Campo requerido").not().isEmpty(),
    check("conductor_id",'No es un ID válido').isMongoId(),
    check("revision_id",'No es un ID válido').isMongoId(),
    validarCampos
  ], httpVehiculo.postVehiculo)

  router.get("/", httpVehiculo.getVehiculo)
  
  router.get("/:id", httpVehiculo.getVehiculoId)
  
  router.put("/:id", httpVehiculo.putVehiculo)

  router.patch("/:id",httpVehiculo.patchVehiculo)

  router.delete("/:id", httpVehiculo.deleteVehiculo)
  
  export default router