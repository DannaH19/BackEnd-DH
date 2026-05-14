import { Request, Response, NextFunction } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  private _UsersService = new UsersService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this._UsersService.register(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  findAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this._UsersService.findAllUsers();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  updateUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this._UsersService.updateUser(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  deleteUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await this._UsersService.deleteUser(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}