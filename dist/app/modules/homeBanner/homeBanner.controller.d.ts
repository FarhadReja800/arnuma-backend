import { NextFunction, Request, Response } from "express";
export declare const createBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getBanner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updatedBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const homeBannerController: {
    createBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getBanner: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updatedBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteBanner: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
};
