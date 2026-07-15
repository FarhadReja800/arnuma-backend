import { TBenefit } from "./benefit.interface";
export declare const BenefitService: {
    createBenefit: (payload: TBenefit) => Promise<import("mongoose").Document<unknown, {}, TBenefit, {}, import("mongoose").DefaultSchemaOptions> & TBenefit & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getBenefits: () => Promise<(import("mongoose").Document<unknown, {}, TBenefit, {}, import("mongoose").DefaultSchemaOptions> & TBenefit & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getSingleBenefit: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TBenefit, {}, import("mongoose").DefaultSchemaOptions> & TBenefit & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateBenefit: (id: string, payload: Partial<TBenefit>) => Promise<(import("mongoose").Document<unknown, {}, TBenefit, {}, import("mongoose").DefaultSchemaOptions> & TBenefit & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteBenefit: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TBenefit, {}, import("mongoose").DefaultSchemaOptions> & TBenefit & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
