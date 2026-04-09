
import { Request, Response, NextFunction } from "express";
import { BookService } from "../library/book.service";

export class BookController {
  private _bookService = new BookService();

  getBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this._bookService.getBooks();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this._bookService.createBook(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}
  