import { THomeBanner } from "./homeBanner.interface";
export declare const homeBannerService: {
    createBannerService: (payload: THomeBanner | THomeBanner[]) => Promise<(import("mongoose").Document<unknown, {}, THomeBanner, {}, import("mongoose").DefaultSchemaOptions> & THomeBanner & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, THomeBanner, {}, import("mongoose").DefaultSchemaOptions> & THomeBanner & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getBannerService: () => Promise<(import("mongoose").Document<unknown, {}, THomeBanner, {}, import("mongoose").DefaultSchemaOptions> & THomeBanner & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getBannerCountService: () => Promise<number>;
    updateBannerService: (id: string, payload: Partial<THomeBanner>) => Promise<(import("mongoose").Document<unknown, {}, THomeBanner, {}, import("mongoose").DefaultSchemaOptions> & THomeBanner & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteBannerService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, THomeBanner, {}, import("mongoose").DefaultSchemaOptions> & THomeBanner & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
