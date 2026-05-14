import { Router } from "express";
import UsersRouter from '../../modules/users/users.routes';
import AuthRouter from '../../modules/auth/auth.routes';
import bookRoutes from '../../modules/library/book.routes';
import categoryRoutes from '../../modules/category/category.routes';
import authorRoutes from '../../modules/author/author.routes';
import reviewRoutes from '../../modules/reviews/review.routes';

const router = Router();

router.use('/users', UsersRouter);
router.use('/auth', AuthRouter);
router.use('/books', bookRoutes);
router.use('/categories', categoryRoutes);
router.use('/authors', authorRoutes);
router.use('/reviews', reviewRoutes);

export default router;