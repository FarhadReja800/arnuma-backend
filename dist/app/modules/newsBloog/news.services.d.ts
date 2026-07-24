import { TBloogNews } from "./news.interface";
import mongoose from "mongoose";
export declare const createPostIntoDB: (payload: TBloogNews) => Promise<mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getAllPostsFromDB: (query: Record<string, unknown>) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getSinglePostBySlugFromDB: (identifier: string) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | null>;
export declare const updatePostInDB: (id: string, payload: Partial<TBloogNews>) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | null>;
export declare const deletePostFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | null>;
export declare const NewsServices: {
    createPostIntoDB: (payload: TBloogNews) => Promise<mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllPostsFromDB: (query: Record<string, unknown>) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSinglePostBySlugFromDB: (identifier: string) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updatePostInDB: (id: string, payload: Partial<TBloogNews>) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deletePostFromDB: (id: string) => Promise<(mongoose.Document<unknown, {}, TBloogNews, {}, mongoose.DefaultSchemaOptions> & TBloogNews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
