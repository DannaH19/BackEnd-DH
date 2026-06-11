import { Request, Response, NextFunction } from "express";
import { BookService } from "./book.service";

export class BookController {
  private service = new BookService();

  getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getBooks();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  getBookById = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getBookById(req.params.id);
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createBook(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  updateBook = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updateBook(req.params.id, req.body);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  deleteBook = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteBook(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  searchBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { q } = req.query;
      const result = await this.service.searchBooks(q as string);
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };
}