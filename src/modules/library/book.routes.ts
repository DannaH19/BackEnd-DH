import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();
const bookController = new BookController();

/**
 * @openapi
 * /books:
 *   get:
 *     summary: Obtener todos los libros
 *     description: Retorna una lista con todos los libros registrados, incluyendo autor, categoría y editorial
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
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       author:
 *                         type: object
 *                       category:
 *                         type: object
 *                       publisher:
 *                         type: object
 *                       year:
 *                         type: number
 *                       isbn:
 *                         type: string
 *                       pages:
 *                         type: number
 *                       availableCopies:
 *                         type: number
 */
router.get("/", bookController.getBooks);

/**
 * @openapi
 * /books/search:
 *   get:
 *     summary: Buscar libros
 *     description: Busca libros por título, descripción o ISBN
 *     tags:
 *       - Books
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Término de búsqueda
 *     responses:
 *       200:
 *         description: Resultados de búsqueda
 */
router.get("/search", bookController.searchBooks);

/**
 * @openapi
 * /books/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     description: Retorna los detalles de un libro específico
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *       404:
 *         description: Libro no encontrado
 */
router.get("/:id", bookController.getBookById);

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
 *               - category
 *               - year
 *               - isbn
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               publisher:
 *                 type: string
 *               year:
 *                 type: number
 *               isbn:
 *                 type: string
 *               pages:
 *                 type: number
 *               description:
 *                 type: string
 *               totalCopies:
 *                 type: number
 *                 default: 1
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *       400:
 *         description: Error al crear el libro
 */
router.post("/", bookController.createBook);

/**
 * @openapi
 * /books/{id}:
 *   put:
 *     summary: Actualizar un libro
 *     description: Actualiza los datos de un libro existente
 *     tags:
 *       - Books
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
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               publisher:
 *                 type: string
 *               year:
 *                 type: number
 *               isbn:
 *                 type: string
 *               pages:
 *                 type: number
 *               description:
 *                 type: string
 *               totalCopies:
 *                 type: number
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.put("/:id", bookController.updateBook);

/**
 * @openapi
 * /books/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     description: Elimina un libro del sistema
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.delete("/:id", bookController.deleteBook);

export default router;