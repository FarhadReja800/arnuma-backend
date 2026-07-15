import { Request, Response } from "express";
export declare const BenefitController: {
    createBenefit: (req: Request, res: Response) => Promise<void>;
    getBenefits: (req: Request, res: Response) => Promise<void>;
    getSingleBenefit: (req: Request, res: Response) => Promise<void>;
    updateBenefit: (req: Request, res: Response) => Promise<void>;
    deleteBenefit: (req: Request, res: Response) => Promise<void>;
};
