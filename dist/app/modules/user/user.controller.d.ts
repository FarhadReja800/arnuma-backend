import type { NextFunction, Request, Response } from "express";
export declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const createStaff: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateUserRole: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const userController: {
    createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createStaff: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUserRole: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
