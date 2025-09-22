const {
  createTipo,
  getTipos,
  getTipoById,
  updateTipo,
  deleteTipo
} = require('../controllers/tipoController');

const express = require('express');
const router = express.Router();

// Crear un nuevo tipo
router.post('/', createTipo);

// Obtener todos los tipos
router.get('/', getTipos);

// Obtener un tipo por ID
router.get('/:id', getTipoById);

// Actualizar un tipo por ID
router.put('/:id', updateTipo);

// Eliminar un tipo por ID
router.delete('/:id', deleteTipo);

module.exports = router;