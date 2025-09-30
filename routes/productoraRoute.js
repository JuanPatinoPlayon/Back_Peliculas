const {
  createProductora,
  getProductoras,
  getProductoraById,
  updateProductora,
  deleteProductora
} = require('../controllers/productoraController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');

/**
 * @swagger
 * /productoras:
 *   get:
 *     summary: Lista todas las productoras registradas
 *     tags:
 *       - Productoras
 *     responses:
 *       200:
 *         description: Productoras obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Productora'
 */
// Obtener todas las productoras
router.get('/', getProductoras);

/**
 * @swagger
 * /productoras:
 *   post:
 *     summary: Crea una nueva productora
 *     tags:
 *       - Productoras
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Nueva Productora"
 *     responses:
 *       201:
 *         description: Productora creada exitosamente
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
// Crear una nueva productora
router.post(
  '/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  createProductora
);

/**
 * @swagger
 * /productoras/{id}:
 *   put:
 *     summary: Actualiza una productora existente
 *     tags:
 *       - Productoras
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la productora a actualizar
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
 *                 example: "Productora Actualizada"
 *     responses:
 *       200:
 *         description: Productora actualizada exitosamente
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
 *         description: Productora no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Productora no encontrada."
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
// Actualizar una productora por ID
router.put(
  '/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    validarCampos
  ],
  updateProductora
);

/**
 * @swagger
 * /productoras/{id}:
 *   get:
 *     summary: Obtiene una productora por su ID
 *     tags:
 *       - Productoras
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la productora a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Productora encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Productora'
 *       404:
 *         description: Productora no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Productora no encontrada."
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
// Obtener una productora por ID
router.get('/:id', getProductoraById);

/**
 * @swagger
 * /productoras/{id}:
 *   delete:
 *     summary: Elimina una productora por su ID
 *     tags:
 *       - Productoras
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la productora a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Productora eliminada exitosamente
 *       404:
 *         description: Productora no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Productora no encontrada."
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
// Eliminar una productora por ID
router.delete('/:id', deleteProductora);

module.exports = router;