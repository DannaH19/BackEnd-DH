import { Router } from "express";
import { ReviewController } from "./review.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createReviewSchema } from "./review.schema";

const router = Router();
const reviewController = new ReviewController();

/**
 * @openapi
 * /reviews:
 *   get:
 *     summary: Obtener todas las reseñas
 *     description: Retorna una lista con todas las reseñas registradas
 *     tags:
 *       - Reviews
 *     responses:
 *       200:
 *         description: Lista de reseñas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 6643f1b2c3a4e500123abcd1
 *                       bookId:
 *                         type: string
 *                         example: 6643f1b2c3a4e500123abcd2
 *                       userId:
 *                         type: string
 *                         example: 6643f1b2c3a4e500123abcd3
 *                       rating:
 *                         type: number
 *                         example: 5
 *                       comment:
 *                         type: string
 *                         example: Excelente libro
 */
router.get("/", reviewController.getReviews);

/**
 * @openapi
 * /reviews:
 *   post:
 *     summary: Crear una nueva reseña
 *     description: Registra una nueva reseña para un libro
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookId
 *               - userId
 *               - rating
 *             properties:
 *               bookId:
 *                 type: string
 *                 example: 6643f1b2c3a4e500123abcd2
 *               userId:
 *                 type: string
 *                 example: 6643f1b2c3a4e500123abcd3
 *               rating:
 *                 type: number
 *                 example: 5
 *               comment:
 *                 type: string
 *                 example: Excelente libro
 *     responses:
 *       201:
 *         description: Reseña creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Reseña creada correctamente
 *       400:
 *         description: Error al crear la reseña
 */
router.post("/", validate(createReviewSchema), reviewController.createReview);

/**
 * @openapi
 * /reviews/{id}:
 *   put:
 *     summary: Actualizar una reseña
 *     description: Actualiza los datos de una reseña por su ID
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 example: 4
 *               comment:
 *                 type: string
 *                 example: Muy buen libro
 *     responses:
 *       200:
 *         description: Reseña actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Reseña actualizada correctamente
 *       404:
 *         description: Reseña no encontrada
 */
router.put("/:id", reviewController.updateReview);

/**
 * @openapi
 * /reviews/{id}:
 *   delete:
 *     summary: Eliminar una reseña
 *     description: Elimina una reseña del sistema por su ID
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     responses:
 *       200:
 *         description: Reseña eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Reseña eliminada correctamente
 *       404:
 *         description: Reseña no encontrada
 */
router.delete("/:id", reviewController.deleteReview);

export default router;