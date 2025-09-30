const {
  createTipo,
  getTipos,
  getTipoById,
  updateTipo,
  deleteTipo
} = require('../controllers/tipoController');
const express = require('express');
const { body } = require('express-validator');
const validarCampos = require('../middlewares/validarCampos');
const router = express.Router();

// Crear un nuevo tipo
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createTipo
);

// Actualizar un tipo por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateTipo
);

// Obtener todos los tipos
router.get('/', getTipos);

// Obtener un tipo por ID
router.get('/:id', getTipoById);

// Eliminar un tipo por ID
router.delete('/:id', deleteTipo);

module.exports = router;