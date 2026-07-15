import type { NextFunction, Response, Request } from "express";
export declare const globalErrorHandler: (err: any, req: Request, res: Response, next: NextFunction) => void;
