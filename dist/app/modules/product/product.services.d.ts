import mongoose from "mongoose";
import { TProduct, TReview } from "./product.interface";
export declare const ProductService: {
    createProduct: (payload: TProduct) => Promise<mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getProducts: (query: Record<string, any>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        data: (mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getSingleProduct: (identifier: string) => Promise<(mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateProduct: (id: string, payload: Partial<TProduct>) => Promise<(mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteProduct: (id: string) => Promise<(mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    addReview: (productId: string, reviewPayload: TReview) => Promise<mongoose.Document<unknown, {}, TProduct, {}, mongoose.DefaultSchemaOptions> & TProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getProductFiltersMetadata: () => Promise<{
        priceRange: {
            min: any;
            max: any;
        };
        colors: any[];
        sizes: any[];
        status: {
            inStock: any;
            onSale: any;
        };
    }>;
};
