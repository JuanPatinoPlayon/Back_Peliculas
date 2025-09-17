const { 
    createGenero, 
    getGeneros, 
    getGeneroById, 
    updateGenero, 
    deleteGenero 
} = require('../controllers/generoController')

// Crear un nuevo género
router.post('/', createGenero);

// Obtener todos los géneros
router.get('/', getGeneros);

// Obtener un género por ID
router.get('/:id', getGeneroById);

// Actualizar un género por ID
router.put('/:id', updateGenero);

// Eliminar un género por ID
router.delete('/:id', deleteGenero);

module.exports = router;