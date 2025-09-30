const { 
  createGenero, 
  getGeneros, 
  getGeneroById, 
  updateGenero, 
  deleteGenero 
} = require('../controllers/generoController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');

// Crear un nuevo género
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createGenero
);

// Actualizar un género por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateGenero
);

// Obtener todos los géneros
router.get('/', getGeneros);

// Obtener un género por ID
router.get('/:id', getGeneroById);

// Eliminar un género por ID
router.delete('/:id', deleteGenero);

module.exports = router;