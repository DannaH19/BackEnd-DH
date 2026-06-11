import { Router } from "express";
import { LoanController } from "./loan.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const loanController = new LoanController();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

/**
 * @openapi
 * /loans:
 *   get:
 *     summary: Obtener todos los préstamos
 *     description: Retorna una lista con todos los préstamos registrados
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de préstamos obtenida exitosamente
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
 *                       user:
 *                         type: object
 *                       book:
 *                         type: object
 *                       loanDate:
 *                         type: string
 *                         format: date
 *                       dueDate:
 *                         type: string
 *                         format: date
 *                       status:
 *                         type: string
 *                         enum: [active, returned, overdue]
 *                       fine:
 *                         type: number
 */
router.get("/", loanController.getLoans);

/**
 * @openapi
 * /loans:
 *   post:
 *     summary: Crear un nuevo préstamo
 *     description: Registra un nuevo préstamo de un libro a un usuario
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user
 *               - book
 *             properties:
 *               user:
 *                 type: string
 *                 description: ID del usuario
 *               book:
 *                 type: string
 *                 description: ID del libro
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Préstamo creado exitosamente
 *       400:
 *         description: Error al crear el préstamo (libro no disponible)
 */
router.post("/", loanController.createLoan);

/**
 * @openapi
 * /loans/{id}/return:
 *   put:
 *     summary: Devolver un libro
 *     description: Registra la devolución de un libro prestado y calcula multa si aplica
 *     tags:
 *       - Loans
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
 *         description: Libro devuelto exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 fine:
 *                   type: number
 *       404:
 *         description: Préstamo no encontrado
 */
router.put("/:id/return", loanController.returnBook);

/**
 * @openapi
 * /loans/user/{userId}:
 *   get:
 *     summary: Obtener préstamos por usuario
 *     description: Retorna todos los préstamos de un usuario específico
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Préstamos del usuario encontrados
 */
router.get("/user/:userId", loanController.getUserLoans);

/**
 * @openapi
 * /loans/active:
 *   get:
 *     summary: Obtener préstamos activos
 *     description: Retorna todos los préstamos que están actualmente activos
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de préstamos activos
 */
router.get("/active", loanController.getActiveLoans);

/**
 * @openapi
 * /loans/{id}:
 *   delete:
 *     summary: Eliminar un préstamo
 *     description: Elimina un préstamo del sistema
 *     tags:
 *       - Loans
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
 *         description: Préstamo eliminado exitosamente
 *       404:
 *         description: Préstamo no encontrado
 */
router.delete("/:id", loanController.deleteLoan);

export default router;