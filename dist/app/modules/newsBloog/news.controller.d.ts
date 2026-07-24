import { Request, Response } from 'express';
export declare const createPost: (req: Request, res: Response) => Promise<void>;
export declare const getAllPosts: (req: Request, res: Response) => Promise<void>;
export declare const getSinglePost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePost: (req: Request, res: Response) => Promise<void>;
export declare const deletePost: (req: Request, res: Response) => Promise<void>;
export declare const NewsControllers: {
    createPost: (req: Request, res: Response) => Promise<void>;
    getAllPosts: (req: Request, res: Response) => Promise<void>;
    getSinglePost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updatePost: (req: Request, res: Response) => Promise<void>;
    deletePost: (req: Request, res: Response) => Promise<void>;
};
