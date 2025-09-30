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

/**
 * @swagger
 * /directores:
 *   get:
 *     summary: Obtiene todos los directores
 *     tags:
 *       - Directores
 *     responses:
 *       200:
 *         description: Lista de directores
 */
// Create a new director
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createDirector
);

/**
 * @swagger
 * /directores:
 *   put:
 *     summary: Actualiza un director existente
 *     tags:
 *       - Directores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del director a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Steven Spielberg"
 *     responses:
 *       200:
 *         description: Director actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Director'
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El nombre es obligatorio."
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Director no encontrado."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error inesperado."
 */
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

/**
 * @swagger
 * /directores/{id}:
 *   get:
 *     summary: Obtiene un director por su ID
 *     tags:
 *       - Directores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del director a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Director encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Director'
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Director no encontrado."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error inesperado."
 */
// Get a director by ID
router.get('/:id', getDirectorById);

/**
 * @swagger
 * /directores/{id}:
 *   delete:
 *     summary: Elimina un director por su ID
 *     tags:
 *       - Directores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del director a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Director eliminado exitosamente
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Director no encontrado."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error inesperado."
 */
// Delete a director by ID
router.delete('/:id', deleteDirector);

module.exports = router;