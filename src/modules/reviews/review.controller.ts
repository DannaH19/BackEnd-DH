import { Request, Response, NextFunction } from "express";
import { ReviewService } from "./review.service";

export class ReviewController {
  private service = new ReviewService();

  getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getReviews();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createReview(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  updateReview = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.updateReview(req.params.id, req.body);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  deleteReview = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteReview(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };
}