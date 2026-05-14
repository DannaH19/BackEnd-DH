import { Request, Response, NextFunction } from "express";
import { AuthorService } from "./author.service";

export class AuthorController {
  private service = new AuthorService();

  getAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getAuthors();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createAuthor(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  updateAuthor = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updateAuthor(req.params.id, req.body);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  deleteAuthor = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteAuthor(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };
}