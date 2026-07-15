import { TNewCollection } from "./newCollection.interface";
export declare const NewCollection: import("mongoose").Model<TNewCollection, {}, {}, {}, import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, TNewCollection>;
