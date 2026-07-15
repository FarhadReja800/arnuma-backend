import type { NextFunction, Request, Response } from "express";
export declare const ProductController: {
    createProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProducts: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSingleProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProduct: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addReview: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProductFiltersMetadata: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
