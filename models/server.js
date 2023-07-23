import express from "express"
import conductor from "../routes/conductor.js"
import empresa from "../routes/empresa.js"
import revision from "../routes/revision.js"
import rutas from "../routes/rutas.js"
import ticket from "../routes/ticket.js"
import cliente from "../routes/cliente.js"
import vehiculo from "../routes/vehiculo.js"
import cors from "cors"
import mongoose from "mongoose"

class Server{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
        this.conectarDB()
    }
conectarDB(){
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected! yeah'));
}
    routes(){
        this.app.use('/api/conductor',conductor)
        this.app.use('/api/empresa',empresa)
        this.app.use('/api/revision',revision)
        this.app.use('/api/ruta',rutas)
        this.app.use('/api/ticket',ticket)
        this.app.use('/api/cliente',cliente)
        this.app.use('/api/vehiculo',vehiculo)
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