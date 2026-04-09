import { Router } from "express";
import { BookController } from "../library/book.controller";

const router = Router();

const _BookController = new BookController();

router.get("/books", _BookController.getBooks);
router.post("/books", _BookController.createBook);

export default router;