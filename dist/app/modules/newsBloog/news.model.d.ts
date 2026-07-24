import { TBloogNews } from './news.interface';
export declare const News: import("mongoose").Model<TBloogNews, {}, {}, {}, import("mongoose").Document<unknown, {}, TBloogNews, {}, import("mongoose").DefaultSchemaOptions> & TBloogNews & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TBloogNews>;
