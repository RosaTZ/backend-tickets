import express from "express"
import cors from "cors"
import mongoose from "mongoose"

class Server{
    constructor(){
        this.app = express()
        this.middlewares()
        this.conectarDB()
    }
conectarDB(){
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected! yeah'));
}
  

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    escuchar(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
          })
    }
}   

export default Server