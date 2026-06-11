import { Request, Response, NextFunction } from "express";
import { PublisherService } from "./publisher.service";

export class PublisherController {
  private service = new PublisherService();

  getPublishers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getPublishers();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  // Si quieres obtener por ID, usa este método
  getPublisherById = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getPublisherById(req.params.id);
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createPublisher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createPublisher(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  updatePublisher = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updatePublisher(req.params.id, req.body);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  deletePublisher = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deletePublisher(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };
}