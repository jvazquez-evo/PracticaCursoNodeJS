const { Router } = require ('express');

const { usuariosGet, 
  usuariosPost, 
  usuariosPut, 
  usuariosPatch, 
  usuariosDelete } = require('../controllers/usuarios');

const router = Router (); 

router.get('/', usuariosGet); // mandamos la referencia

  router.put('/:id', usuariosPut) // Obtener el valor dinamicamente 

  router.post('/', usuariosPost)

  router.delete('/', usuariosDelete)

  router.patch('/', usuariosPatch)



module.exports = router;