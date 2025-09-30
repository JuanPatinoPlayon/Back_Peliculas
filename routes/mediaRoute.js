const {
  createMedia,
  getMedias,
  getMediaById,
  updateMedia,
  deleteMedia
} = require('../controllers/mediaController');
const express = require('express');
const { body } = require('express-validator');
const validarCampos = require('../middlewares/validarCampos');
const router = express.Router();

router.post(
  '/',
  [
    body('serial').notEmpty().withMessage('El serial es obligatorio'),
    body('titulo').notEmpty().withMessage('El título es obligatorio'),
    body('url').notEmpty().withMessage('La URL es obligatoria'),
    validarCampos
  ],
  createMedia
);

router.put(
  '/:id',
  [
    body('serial').notEmpty().withMessage('El serial es obligatorio'),
    body('titulo').notEmpty().withMessage('El título es obligatorio'),
    body('url').notEmpty().withMessage('La URL es obligatoria'),
    validarCampos
  ],
  updateMedia
);

router.get('/', getMedias);
router.get('/:id', getMediaById);
router.delete('/:id', deleteMedia);

module.exports = router;