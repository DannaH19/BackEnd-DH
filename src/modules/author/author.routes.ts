import { Router } from "express";
import { AuthorController } from "./author.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createAuthorSchema } from "./author.schema";

const router = Router();
const authorController = new AuthorController();

/**
 * @openapi
 * /authors:
 *   get:
 *     summary: Obtener todos los autores
 *     description: Retorna una lista con todos los autores registrados
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: Lista de autores obtenida exitosamente
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
 *                         example: Gabriel García Márquez
 *                       nationality:
 *                         type: string
 *                         example: Colombiana
 *                       birthYear:
 *                         type: number
 *                         example: 1927
 */
router.get("/", authorController.getAuthors);

/**
 * @openapi
 * /authors:
 *   post:
 *     summary: Crear un nuevo autor
 *     description: Registra un nuevo autor en el sistema
 *     tags:
 *       - Authors
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
 *                 example: Gabriel García Márquez
 *               nationality:
 *                 type: string
 *                 example: Colombiana
 *               birthYear:
 *                 type: number
 *                 example: 1927
 *     responses:
 *       201:
 *         description: Autor creado exitosamente
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
 *                   example: Autor creado correctamente
 *                 author:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 6643f1b2c3a4e500123abcd1
 *                     name:
 *                       type: string
 *                       example: Gabriel García Márquez
 *                     nationality:
 *                       type: string
 *                       example: Colombiana
 *                     birthYear:
 *                       type: number
 *                       example: 1927
 *       400:
 *         description: Error al crear el autor
 */
router.post("/", validate(createAuthorSchema), authorController.createAuthor);

/**
 * @openapi
 * /authors/{id}:
 *   put:
 *     summary: Actualizar un autor
 *     description: Actualiza los datos de un autor por su ID
 *     tags:
 *       - Authors
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
 *                 example: Gabriel García Márquez
 *               nationality:
 *                 type: string
 *                 example: Colombiana
 *               birthYear:
 *                 type: number
 *                 example: 1927
 *     responses:
 *       200:
 *         description: Autor actualizado exitosamente
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
 *                   example: Autor actualizado correctamente
 *       404:
 *         description: Autor no encontrado
 */
router.put("/:id", authorController.updateAuthor);

/**
 * @openapi
 * /authors/{id}:
 *   delete:
 *     summary: Eliminar un autor
 *     description: Elimina un autor del sistema por su ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     responses:
 *       200:
 *         description: Autor eliminado exitosamente
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
 *                   example: Autor eliminado correctamente
 *       404:
 *         description: Autor no encontrado
 */
router.delete("/:id", authorController.deleteAuthor);

export default router;