const {
  createProductora,
  getProductoras,
  getProductoraById,
  updateProductora,
  deleteProductora
} = require('../controllers/productoraController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');

// Crear una nueva productora
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createProductora
);

// Actualizar una productora por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateProductora
);

// Obtener todas las productoras
router.get('/', getProductoras);

// Obtener una productora por ID
router.get('/:id', getProductoraById);

// Eliminar una productora por ID
router.delete('/:id', deleteProductora);

module.exports = router;