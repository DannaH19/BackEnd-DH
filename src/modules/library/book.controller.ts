import { Request, Response, NextFunction } from "express";
import { BookService } from "./book.service";

export class BookController {
  private service = new BookService();

  getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getBooks();

      res.status(200).json({
        ok: true,
        data: result
      });

    } catch (error) {
      next(error);
    }
  };

  createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, author, year } = req.body;

      const result = await this.service.createBook({
        title,
        author,
        year
      });

      res.status(201).json({
        ok: true,
        message: "Libro creado",
        data: result
      });

    } catch (error) {
      next(error);
    }
  };
}
  