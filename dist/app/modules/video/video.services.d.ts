import { THomeVideo } from "./video.interface";
export declare const HomeVideoService: {
    createHomeVideo: (payload: THomeVideo) => Promise<import("mongoose").Document<unknown, {}, THomeVideo, {}, import("mongoose").DefaultSchemaOptions> & THomeVideo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getHomeVideo: () => Promise<(import("mongoose").Document<unknown, {}, THomeVideo, {}, import("mongoose").DefaultSchemaOptions> & THomeVideo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateHomeVideo: (id: string, payload: Partial<THomeVideo>) => Promise<(import("mongoose").Document<unknown, {}, THomeVideo, {}, import("mongoose").DefaultSchemaOptions> & THomeVideo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteHomeVideo: (id: string) => Promise<(import("mongoose").Document<unknown, {}, THomeVideo, {}, import("mongoose").DefaultSchemaOptions> & THomeVideo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
