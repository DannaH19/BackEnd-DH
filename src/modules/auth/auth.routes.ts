import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();
const _AuthController = new AuthController();

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Crea un usuario en el sistema con rol "user" por defecto y retorna un token JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Danna
 *               email:
 *                 type: string
 *                 example: danna@gmail.com
 *               password:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 69e0fe6f35604e48f1ceef06
 *                     name:
 *                       type: string
 *                       example: Danna 
 *                     email:
 *                       type: string
 *                       example: danna@gmail.com
 *                     role:
 *                       type: string
 *                       example: user
 *                 token:
 *                   type: string
 *                   example:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OWUwZmU2ZjM1NjA0ZTQ4ZjFjZWVmMDYiLCJlbWFpbCI6ImRhbm5hQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc4ODA4MjgwLCJleHAiOjE3Nzg4OTQ2ODB9._iRE5hN32S01q71GcnhrfdYGmfbmGEwm1G4Y4wcQNVc
 *       400:
 *         description: El usuario ya existe
 */
router.post('/register', _AuthController.register);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Autentica un usuario con email y contraseña, retorna un token JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: danna@gmail.com
 *               password:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 69e0fe6f35604e48f1ceef06
 *                     name:
 *                       type: string
 *                       example: Danna
 *                     email:
 *                       type: string
 *                       example: danna@gmail.com
 *                     role:
 *                       type: string
 *                       example: user
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OWUwZmU2ZjM1NjA0ZTQ4ZjFjZWVmMDYiLCJlbWFpbCI6ImRhbm5hQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc4ODA4MjgwLCJleHAiOjE3Nzg4OTQ2ODB9._iRE5hN32S01q71GcnhrfdYGmfbmGEwm1G4Y4wcQNVc
 *       400:
 *         description: Usuario no existe o credenciales inválidas
 */
router.post('/login', _AuthController.login);

/**
 * @openapi
 * /auth/{id}:
 *   put:
 *     summary: Actualizar datos de autenticación
 *     description: Actualiza el email o contraseña de un usuario por su ID
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
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
 *               email:
 *                 type: string
 *                 example: nuevo@test.com
 *               password:
 *                 type: string
 *                 example: "nuevaPassword123"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', _AuthController.update);

/**
 * @openapi
 * /auth/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     description: Elimina un usuario del sistema por su ID
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6643f1b2c3a4e500123abcd1
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:id', _AuthController.delete);

export default router;