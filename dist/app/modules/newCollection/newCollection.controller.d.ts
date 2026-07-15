import type { NextFunction, Request, Response } from "express";
export declare const NewCollectionController: {
    createCollectionContent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCollectionContent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSingleCollectionContent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCollectionContent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCollectionContent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
