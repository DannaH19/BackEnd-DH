import { Router } from "express";
import { PublisherController } from "./publisher.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const publisherController = new PublisherController();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

/**
 * @openapi
 * /publishers:
 *   get:
 *     summary: Obtener todas las editoriales
 *     description: Retorna una lista con todas las editoriales registradas
 *     tags:
 *       - Publishers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de editoriales obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       country:
 *                         type: string
 *                       city:
 *                         type: string
 *                       foundedYear:
 *                         type: number
 *                       website:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 */
router.get("/", publisherController.getPublishers);

/**
 * @openapi
 * /publishers/{id}:
 *   get:
 *     summary: Obtener una editorial por ID
 *     description: Retorna los detalles de una editorial específica
 *     tags:
 *       - Publishers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Editorial encontrada
 *       404:
 *         description: Editorial no encontrada
 */
router.get("/:id", publisherController.getPublisherById);

/**
 * @openapi
 * /publishers:
 *   post:
 *     summary: Crear una nueva editorial
 *     description: Registra una nueva editorial en el sistema
 *     tags:
 *       - Publishers
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - country
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *               city:
 *                 type: string
 *               foundedYear:
 *                 type: number
 *               website:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Editorial creada exitosamente
 *       400:
 *         description: Error al crear la editorial
 */
router.post("/", publisherController.createPublisher);

/**
 * @openapi
 * /publishers/{id}:
 *   put:
 *     summary: Actualizar una editorial
 *     description: Actualiza los datos de una editorial existente
 *     tags:
 *       - Publishers
 *     security:
 *       - bearerAuth: []
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
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *               city:
 *                 type: string
 *               foundedYear:
 *                 type: number
 *               website:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Editorial actualizada exitosamente
 *       404:
 *         description: Editorial no encontrada
 */
router.put("/:id", publisherController.updatePublisher);

/**
 * @openapi
 * /publishers/{id}:
 *   delete:
 *     summary: Eliminar una editorial
 *     description: Elimina una editorial del sistema
 *     tags:
 *       - Publishers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Editorial eliminada exitosamente
 *       404:
 *         description: Editorial no encontrada
 */
router.delete("/:id", publisherController.deletePublisher);

export default router;