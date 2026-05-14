import { Request, Response, NextFunction } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
  private service = new CategoryService();

  getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getCategories();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createCategory(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  updateCategory = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updateCategory(req.params.id, req.body);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteCategory(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };
}