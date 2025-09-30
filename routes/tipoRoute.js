const {
  createTipo,
  getTipos,
  getTipoById,
  updateTipo,
  deleteTipo
} = require('../controllers/tipoController');
const express = require('express');
const { body } = require('express-validator');
const validarCampos = require('../middlewares/validarCampos');
const router = express.Router();

/**
 * @swagger
 * /tipos:
 *   get:
 *     summary: Lista todos los tipos de contenido
 *     tags:
 *       - Tipos
 *     responses:
 *       200:
 *         description: Tipos obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tipo'
 */
// Obtener todos los tipos
router.get('/', getTipos);

/**
 * @swagger
 * /tipos:
 *   post:
 *     summary: Crea un nuevo tipo
 *     tags:
 *       - Tipos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Acción"
 *     responses:
 *       201:
 *         description: Tipo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tipo'
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
// Crear un nuevo tipo
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createTipo
);

/**
 * @swagger
 * /tipos/{id}:
 *   put:
 *     summary: Actualiza un tipo por ID
 *     tags:
 *       - Tipos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo a actualizar
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
 *                 example: "Acción"
 *     responses:
 *       200:
 *         description: Tipo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tipo'
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
 *       404:
 *         description: Tipo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Tipo no encontrado."
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
// Actualizar un tipo por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateTipo
);

/**
 * @swagger
 * /tipos/{id}:
 *   get:
 *     summary: Obtiene un tipo por ID
 *     tags:
 *       - Tipos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tipo'
 *       404:
 *         description: Tipo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Tipo no encontrado."
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
// Obtener un tipo por ID
router.get('/:id', getTipoById);

/**
 * @swagger
 * /tipos/{id}:
 *   delete:
 *     summary: Elimina un tipo por ID
 *     tags:
 *       - Tipos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tipo eliminado exitosamente
 *       404:
 *         description: Tipo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Tipo no encontrado."
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
// Eliminar un tipo por ID
router.delete('/:id', deleteTipo);

module.exports = router;