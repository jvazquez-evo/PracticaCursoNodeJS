# Practica de desarrollo de apis con node js y express del curso de fernando herrera


Ejemplos de consultas a ThunderClient / Postman

get: http://localhost:4041/api/usuarios?edad=19&nombre=juan
despues de ? son los query y & para anidar

post: http://localhost:4041/api/usuarios

en body:
{
  "nombre" : "juan",
  "edad" : 23
}

delete:

put: http://localhost:4041/api/usuarios/10 

patch: 


Para reconstruir los node modules hacer npm install


# Consideraciones para el archivo .env
PORT = $port
