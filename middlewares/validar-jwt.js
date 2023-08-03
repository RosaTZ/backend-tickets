import jwt from "jsonwebtoken"
import Administrador from "../models/administrador.js";

const validarJWT = async (req, res, next) => {
    // const token = req.header("x-token");
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }
    try {
        const bearer=token.split(" ")
        const bearerToken=bearer[1]
        const { id } = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY)

        let usuario = await Administrador.findById(id);
        console.log(usuario);
        if (!usuario) {
            return res.status(401).json({
                msg: "Token no válido "
            })
        }
        if (usuario.estado == 0) {
            return res.status(401).json({
                msg: "Token no válido " 
            })
        }
        req.usuario=usuario

        next();

    } catch (error) {
        res.status(401).json({
            msg: "Token no valido"
        })
    }
}


export { validarJWT }