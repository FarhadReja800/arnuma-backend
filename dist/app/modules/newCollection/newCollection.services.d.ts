import { TNewCollection } from "./newCollection.interface";
export declare const NewCollectionService: {
    createCollectionContent: (payload: TNewCollection) => Promise<import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getCollectionContent: (query: Record<string, any>) => Promise<(import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleCollectionContent: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCollectionContent: (id: string, payload: Partial<TNewCollection>) => Promise<(import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCollectionContent: (id: string) => Promise<(import("mongoose").Document<unknown, {}, TNewCollection, {}, import("mongoose").DefaultSchemaOptions> & TNewCollection & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
