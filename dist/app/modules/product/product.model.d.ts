import { TProduct } from "./product.interface";
export declare const Product: import("mongoose").Model<TProduct, {}, {}, {}, import("mongoose").Document<unknown, {}, TProduct, {}, import("mongoose").DefaultSchemaOptions> & TProduct & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TProduct>;
