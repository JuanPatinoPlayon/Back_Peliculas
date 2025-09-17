const { 
    createDirector, 
    getDirectors, 
    getDirectorById, 
    updateDirector, 
    deleteDirector 
} = require('../controllers/directorController');

const express = require('express');
const router = express.Router();

// Create a new director
router.post('/', createDirector);

// Get all directors
router.get('/', getDirectors);

// Get a director by ID
router.get('/:id', getDirectorById);

// Update a director by ID
router.put('/:id', updateDirector);

// Delete a director by ID
router.delete('/:id', deleteDirector);

module.exports = router;