const {
  createMedia,
  getMedias,
  getMediaById,
  updateMedia,
  deleteMedia
} = require('../controllers/mediaController');

const express = require('express');
const router = express.Router();

// Crear una nueva media
router.post('/', createMedia);

// Obtener todas las medias
router.get('/', getMedias);

// Obtener una media por ID
router.get('/:id', getMediaById);

// Actualizar una media por ID
router.put('/:id', updateMedia);

// Eliminar una media por ID
router.delete('/:id', deleteMedia);

module.exports = router;