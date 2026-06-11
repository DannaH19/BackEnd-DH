import { Request, Response, NextFunction } from "express";
import { LoanService } from "./loan.service";

export class LoanController {
  private service = new LoanService();

  getLoans = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getLoans();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  createLoan = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.createLoan(req.body);
      res.status(201).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  returnBook = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.returnBook(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };

  getUserLoans = async (req: Request<{ userId: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getUserLoans(req.params.userId);
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  getActiveLoans = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getActiveLoans();
      res.status(200).json({ ok: true, data: result });
    } catch (error) {
      next(error);
    }
  };

  deleteLoan = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteLoan(req.params.id);
      res.status(200).json({ ok: true, ...result });
    } catch (error) {
      next(error);
    }
  };
}