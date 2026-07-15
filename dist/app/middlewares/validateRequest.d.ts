import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod";
declare const validateRequest: (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default validateRequest;
