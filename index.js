// Practica: Importaciones de Node arriba
require  ('dotenv').config()


// Practica: Importaciones propias 
const Server = require ('./models/Server')

const server = new Server () ;

server.listen();  






// Se puede usar express para configurar un servicio rest que tenga los endpoints para invocar servicios