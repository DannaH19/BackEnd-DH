import { Request, Response, NextFunction } from "express";
import { HttpError } from "../libs/http-error";

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error instanceof HttpError ? (error as HttpError).statusCode : 500;
  
  return res.status(status).json({
    ok: false,
    message: error.message || 'Error interno del servidor',
  });
};