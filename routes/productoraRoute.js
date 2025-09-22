const {
  createProductora,
  getProductoras,
  getProductoraById,
  updateProductora,
  deleteProductora
} = require('../controllers/productoraController');

const express = require('express');
const router = express.Router();

// Crear una nueva productora
router.post('/', createProductora);

// Obtener todas las productoras
router.get('/', getProductoras);

// Obtener una productora por ID
router.get('/:id', getProductoraById);

// Actualizar una productora por ID
router.put('/:id', updateProductora);

// Eliminar una productora por ID
router.delete('/:id', deleteProductora);

module.exports = router;