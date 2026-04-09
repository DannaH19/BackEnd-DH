import { Router } from "express";
import { BookController } from "../library/book.controller";

const router = Router();
const bookController = new BookController();

router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);

export default router;