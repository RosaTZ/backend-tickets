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
    async conectarDB() {
        try {
          await mongoose.connect(process.env.MONGODB);
          console.log('Connected! Yeah');
        } catch (error) {
          console.error('Error connecting to the database:', error.message);
        }
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