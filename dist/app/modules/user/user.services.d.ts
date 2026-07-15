import { TUser } from "./user.interface";
export declare const userService: {
    createUserService: (payload: Partial<TUser>) => Promise<import("mongoose").Document<unknown, {}, TUser, {}, import("mongoose").DefaultSchemaOptions> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    loginUserService: (payload: Partial<TUser>) => Promise<{
        user: import("mongoose").Document<unknown, {}, TUser, {}, import("mongoose").DefaultSchemaOptions> & TUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    createStaffService: (payload: Partial<TUser>) => Promise<import("mongoose").Document<unknown, {}, TUser, {}, import("mongoose").DefaultSchemaOptions> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateUserRoleService: (payload: {
        userId: string;
        role: TUser["role"];
    }) => Promise<import("mongoose").Document<unknown, {}, TUser, {}, import("mongoose").DefaultSchemaOptions> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
