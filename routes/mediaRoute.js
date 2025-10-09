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

/**
 * @swagger
 * /medias:
 *   get:
 *     summary: Lista todas las películas y series registradas
 *     tags:
 *       - Medias
 *     responses:
 *       200:
 *         description: Medias obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Media'
 */
router.get("/", getMedias);

/**
 * @swagger
 * /medias/{id}:
 *   get:
 *     summary: Obtiene una película o serie por ID
 *     tags:
 *       - Medias
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Media obtenida exitosamente
 *       404:
 *         description: Media no encontrada
 */
router.get("/:id", getMediaById);

/**
 * @swagger
 * /medias:
 *   post:
 *     summary: Crea una nueva película o serie
 *     tags:
 *       - Medias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Media'
 *     responses:
 *       201:
 *         description: Media creada exitosamente
 *       400:
 *         description: Error de validación o serial duplicado
 */
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

/**
 * @swagger
 * /medias/{id}:
 *   put:
 *     summary: Actualiza una película o serie por ID
 *     tags:
 *       - Medias
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Media'
 *     responses:
 *       200:
 *         description: Media actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Media no encontrada
 */
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

/**
 * @swagger
 * /medias/{id}:
 *   delete:
 *     summary: Elimina una película o serie por ID
 *     tags:
 *       - Medias
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Media eliminada exitosamente
 *       404:
 *         description: Media no encontrada
 */
router.delete("/:id", deleteMedia);

module.exports = router;
