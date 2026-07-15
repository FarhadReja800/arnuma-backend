import { TUser } from "./user.interface";
export declare const User: import("mongoose").Model<TUser, {}, {}, {}, import("mongoose").Document<unknown, {}, TUser, {}, import("mongoose").DefaultSchemaOptions> & TUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, TUser>;
