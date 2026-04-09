import { Router } from "express";
import UsersRouter from '../../modules/users/users.routes';
import AuthRouter from '../../modules/auth/auth.routes';
import bookRoutes from '../../modules/library/book.routes';


const router = Router();

router.use('/users', UsersRouter);
router.use('/auth', AuthRouter);
router.use('/books', bookRoutes);

export default router;