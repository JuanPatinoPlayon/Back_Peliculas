const { 
  createGenero, 
  getGeneros, 
  getGeneroById, 
  updateGenero, 
  deleteGenero 
} = require('../controllers/generoController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');

/**
 * @swagger
 * /generos:
 *   get:
 *     summary: Obtiene todos los géneros
 *     tags:
 *       - Géneros
 *     responses:
 *       200:
 *         description: Lista de géneros
 */

/**
 * @swagger
 * /generos:
 *   post:
 *     summary: Crea un nuevo género de película o serie
 *     tags:
 *       - Géneros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genero'
 *     responses:
 *       201:
 *         description: Género creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genero'
 *       400:
 *         description: Error de validación o nombre duplicado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El nombre ya está registrado."
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

// Crear un nuevo género
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createGenero
);

// Actualizar un género por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateGenero
);

// Obtener todos los géneros
/**
 * @swagger
 * /generos:
 *   get:
 *     summary: Lista todos los géneros disponibles
 *     tags:
 *       - Géneros
 *     responses:
 *       200:
 *         description: Géneros obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 */
router.get('/', getGeneros);

// Obtener un género por ID
/**
 * @swagger
 * /generos/{id}:
 *   get:
 *     summary: Obtiene un género por ID
 *     tags:
 *       - Géneros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Género obtenido exitosamente
 *       404:
 *         description: Género no encontrado
 */
router.get('/:id', getGeneroById);

// Eliminar un género por ID
/**
 * @swagger
 * /generos/{id}:
 *   delete:
 *     summary: Elimina un género por ID
 *     tags:
 *       - Géneros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Género eliminado exitosamente
 *       404:
 *         description: Género no encontrado
 */
router.delete('/:id', deleteGenero);

module.exports = router;