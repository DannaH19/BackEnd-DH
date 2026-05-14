import { Router } from "express";
import { CategoryController } from "./category.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createCategorySchema } from "./category.schema";

const router = Router();
const categoryController = new CategoryController();

/**
 * @openapi
 * /categories:
 *   get:
 *     summary: Obtener todas las categorías
 *     description: Retorna una lista con todas las categorías registradas
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida exitosamente
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
 *                       name:
 *                         type: string
 *                         example: Ficción
 *                       description:
 *                         type: string
 *                         example: Libros de ficción
 */
router.get("/", categoryController.getCategories);

/**
 * @openapi
 * /categories:
 *   post:
 *     summary: Crear una nueva categoría
 *     description: Registra una nueva categoría en el sistema
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ficción
 *               description:
 *                 type: string
 *                 example: Libros de ficción
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
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
 *                   example: Categoría creada correctamente
 *                 category:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 6643f1b2c3a4e500123abcd1
 *                     name:
 *                       type: string
 *                       example: Ficción
 *                     description:
 *                       type: string
 *                       example: Libros de ficción
 *       400:
 *         description: Error al crear la categoría
 */
router.post("/", validate(createCategorySchema), categoryController.createCategory);

/**
 * @openapi
 * /categories/{id}:
 *   put:
 *     summary: Actualizar una categoría
 *     description: Actualiza los datos de una categoría por su ID
 *     tags:
 *       - Categories
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
 *               name:
 *                 type: string
 *                 example: Ficción
 *               description:
 *                 type: string
 *                 example: Libros de ficción
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
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
 *                   example: Categoría actualizada correctamente
 *       404:
 *         description: Categoría no encontrada
 */
router.put("/:id", categoryController.updateCategory);

/**
 * @openapi
 * /categories/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     description: Elimina una categoría del sistema por su ID
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
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
 *                   example: Categoría eliminada correctamente
 *       404:
 *         description: Categoría no encontrada
 */
router.delete("/:id", categoryController.deleteCategory);

export default router;