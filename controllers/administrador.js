import Administrador from "../models/administrador.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const httpAdministrador = {
  postAdministrador: async (req, res) => {
    try {
      const { email, password, estado } = req.body;
      if (!email || !password || !estado) {
        return res
          .status(400)
          .json({ message: "Se requiere email y contraseña." });
      }
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const administrador = new Administrador({
        email,estado,
        password: hashedPassword,
      });
      await administrador.save();
      res.json({ administrador});
    } catch (error) {
      console.error("Error al crear el administrador:", error);
      res.status(500).json({ message: "Error al crear el administrador." });
    }
  },
  postAdministradorToken: async (req,res)=>{
    const { email, password } = req.body;
    try {
        const administrador = await Administrador.findOne({ email })
        if (!administrador) {
            return res.status(400).json({
                msg: "Holder / Password no son correctos"
            })
        }
        if (administrador.estado === 0) {
            return res.status(400).json({
                msg: "Holder Inactivo"
            })
        }
        const validPassword = bcrypt.compareSync(password, administrador.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Holder / Password no son correctos"
            })
        }
        const token = jwt.sign({ id: administrador.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        res.json({
            administrador,
            token
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
}

}
export default httpAdministrador;