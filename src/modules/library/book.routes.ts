import { Router } from "express";
import { BookController } from "../library/book.controller";

const router = Router();
const bookController = new BookController();

/**
 * @openapi
 * /books:
 *   get:
 *     summary: Obtener todos los libros
 *     description: Retorna una lista con todos los libros registrados en el sistema
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: Lista de libros obtenida exitosamente
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
 *                       title:
 *                         type: string
 *                         example: Cien años de soledad
 *                       author:
 *                         type: string
 *                         example: Gabriel García Márquez
 *                       year:
 *                         type: number
 *                         example: 1967
 */
router.get("/", bookController.getBooks);

/**
 * @openapi
 * /books:
 *   post:
 *     summary: Crear un nuevo libro
 *     description: Registra un nuevo libro en el sistema
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - year
 *             properties:
 *               title:
 *                 type: string
 *                 example: Cien años de soledad
 *               author:
 *                 type: string
 *                 example: Gabriel García Márquez
 *               year:
 *                 type: number
 *                 example: 1967
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
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
 *                   example: Libro creado
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Libro creado correctamente
 *                     book:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 6643f1b2c3a4e500123abcd1
 *                         title:
 *                           type: string
 *                           example: Cien años de soledad
 *                         author:
 *                           type: string
 *                           example: Gabriel García Márquez
 *                         year:
 *                           type: number
 *                           example: 1967
 *       400:
 *         description: Error al crear el libro
 */
router.post("/", bookController.createBook);

/**
 * @openapi
 * /books/{id}:
 *   put:
 *     summary: Actualizar un libro
 *     description: Actualiza los datos de un libro existente por su ID
 *     tags:
 *       - Books
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
 *               title:
 *                 type: string
 *                 example: Cien años de soledad
 *               author:
 *                 type: string
 *                 example: Gabriel García Márquez
 *               year:
 *                 type: number
 *                 example: 1967
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
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
 *                   example: Libro actualizado correctamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 6643f1b2c3a4e500123abcd1
 *                     title:
 *                       type: string
 *                       example: Cien años de soledad
 *                     author:
 *                       type: string
 *                       example: Gabriel García Márquez
 *                     year:
 *                       type: number
 *                       example: 1967
 *       404:
 *         description: Libro no encontrado
 */
router.put("/:id", bookController.updateBook);

/**
 * @openapi
 * /books/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     description: Elimina un libro del sistema por su ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
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
 *                   example: Libro eliminado correctamente
 *       404:
 *         description: Libro no encontrado
 */
router.delete("/:id", bookController.deleteBook);

export default router;