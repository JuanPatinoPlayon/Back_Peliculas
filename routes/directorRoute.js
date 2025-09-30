const { 
  createDirector, 
  getDirectors, 
  getDirectorById, 
  updateDirector, 
  deleteDirector 
} = require('../controllers/directorController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');

// Create a new director
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createDirector
);

// Update a director by ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateDirector
);

// Get all directors
router.get('/', getDirectors);

// Get a director by ID
router.get('/:id', getDirectorById);

// Delete a director by ID
router.delete('/:id', deleteDirector);

module.exports = router;