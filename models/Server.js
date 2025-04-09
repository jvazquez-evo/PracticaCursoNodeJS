const express = require ('express')
const cors = require ('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor () {
        this.app = express();

        // Puerto como variable local
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de aplicacion 
        this.routes();   

        // Conexion a la base de datos
        this.conectarBD();

        this.usuariosPath = '/api/usuarios'; // Chequear porque no anda
        
    }

    routes (){
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    listen (){ 
        this.app.listen(this.port, () => {
            console.log ('Servidor corriendo en puerto', this.port)
        })
    }

    middlewares (){ 
        this.app.use( cors())

        this.app.use (express.json());

        // Directorio publico 
        this.app.use (express.static('public'));

    }

    async conectarBD (){
        await dbConnection();
    }  
}

module.exports = Server