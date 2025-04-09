const { response , request} = require ('express');
const Usuario = require('../models/usuario');
const bcryptjs = require ('bcryptjs');



const usuariosGet =  (req=request, res = response) => {
    const {nombre, edad = 18} = req.query; // en este caso son los query params que pueden ser opcionales , hacemos la desestructuracion

    res.json ({
        msg: 'get API - Controlador',
        nombre,
        edad
    })
  }

const usuariosPost = async (req, res = response) => {

    const {nombre, correo, password, rol } = req.body;
    const usuario = new Usuario(nombre, correo, password, rol);

    // Validar si existe el correo

    // Encriptar la contraseña 
    const salt = bcrypt.genSaltSync(); // default 10
    usuario.password = bcryptjs.hashSync(password, salt)
  
    await usuario.save();


    res.json ({
        usuario
    })

  }  

const usuariosPut = (req, res = response) => {
    const id = req.params.id; // Si tenemos mas podemos desestrucutrar el id de los params


    res.json ({
        msg: 'put API controler',
        id
    })
  }


const usuariosDelete = (req, res = response) => {
    res.json ({
        msg: 'delete API - controller '
    })
  }


const usuariosPatch = (req, res = response) => {
    res.json ({
        msg: 'patch API - controller'
    })
  } 


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}