import mongoose from "mongoose";
import { TCategory } from "./category.interface";
export declare const CategoryService: {
    createCategory: (payload: TCategory) => Promise<mongoose.Document<unknown, {}, TCategory, {}, mongoose.DefaultSchemaOptions> & TCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getCategories: (query: {
        nested?: string;
    }) => Promise<any[]>;
    getSingleCategory: (identifier: string) => Promise<(mongoose.Document<unknown, {}, TCategory, {}, mongoose.DefaultSchemaOptions> & TCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCategory: (id: string, payload: Partial<TCategory>) => Promise<(mongoose.Document<unknown, {}, TCategory, {}, mongoose.DefaultSchemaOptions> & TCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCategory: (id: string) => Promise<(mongoose.Document<unknown, {}, TCategory, {}, mongoose.DefaultSchemaOptions> & TCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
