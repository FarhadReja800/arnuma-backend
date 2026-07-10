import type { NextFunction, Response, Request } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Something went wrong!";

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};