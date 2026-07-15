import { TCategory } from "./category.interface";
export declare const Category: import("mongoose").Model<TCategory, {}, {}, {}, import("mongoose").Document<unknown, {}, TCategory, {}, import("mongoose").DefaultSchemaOptions> & TCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TCategory>;
