import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("[validateRequest] incoming request:", {
      method: req.method,
      url: req.originalUrl,
      contentType: req.headers["content-type"],
      body: req.body,
    });
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      next();
    } catch (error) {
      console.error("[validateRequest] Zod Error details:", error);
      next(error);
    }
  };
};

export default validateRequest;
