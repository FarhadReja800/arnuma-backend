import * as z from "zod";
import { TIsActiveStatus, TUserRoles } from "./user.interface";
export declare const authMethodValidationSchema: z.ZodObject<{
    provider: z.ZodString;
    providerId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    provider: string;
    providerId: string;
}, {
    provider: string;
    providerId: string;
}>;
export declare const createUserValidationSchema: z.ZodObject<{
    body: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        profilePicture: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phoneNumber: z.ZodOptional<z.ZodString>;
        role: z.ZodNativeEnum<typeof TUserRoles>;
        bio: z.ZodOptional<z.ZodString>;
        isActive: z.ZodDefault<z.ZodNativeEnum<typeof TIsActiveStatus>>;
        isVerified: z.ZodDefault<z.ZodBoolean>;
        bookings: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        orders: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        ratings: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        reviews: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        wishlist: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refreshToken: z.ZodOptional<z.ZodString>;
        payments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        verificationToken: z.ZodOptional<z.ZodString>;
        resetPasswordToken: z.ZodOptional<z.ZodString>;
        resetPasswordExpires: z.ZodOptional<z.ZodDate>;
        auth: z.ZodArray<z.ZodObject<{
            provider: z.ZodString;
            providerId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            provider: string;
            providerId: string;
        }, {
            provider: string;
            providerId: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        isActive: TIsActiveStatus;
        id: string;
        name: string;
        email: string;
        password: string;
        role: TUserRoles;
        isVerified: boolean;
        auth: {
            provider: string;
            providerId: string;
        }[];
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
        bio?: string | undefined;
        bookings?: string[] | undefined;
        orders?: string[] | undefined;
        services?: string[] | undefined;
        ratings?: string[] | undefined;
        reviews?: string[] | undefined;
        wishlist?: string[] | undefined;
        refreshToken?: string | undefined;
        payments?: string[] | undefined;
        verificationToken?: string | undefined;
        resetPasswordToken?: string | undefined;
        resetPasswordExpires?: Date | undefined;
    }, {
        id: string;
        name: string;
        email: string;
        password: string;
        role: TUserRoles;
        auth: {
            provider: string;
            providerId: string;
        }[];
        isActive?: TIsActiveStatus | undefined;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
        bio?: string | undefined;
        isVerified?: boolean | undefined;
        bookings?: string[] | undefined;
        orders?: string[] | undefined;
        services?: string[] | undefined;
        ratings?: string[] | undefined;
        reviews?: string[] | undefined;
        wishlist?: string[] | undefined;
        refreshToken?: string | undefined;
        payments?: string[] | undefined;
        verificationToken?: string | undefined;
        resetPasswordToken?: string | undefined;
        resetPasswordExpires?: Date | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        isActive: TIsActiveStatus;
        id: string;
        name: string;
        email: string;
        password: string;
        role: TUserRoles;
        isVerified: boolean;
        auth: {
            provider: string;
            providerId: string;
        }[];
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
        bio?: string | undefined;
        bookings?: string[] | undefined;
        orders?: string[] | undefined;
        services?: string[] | undefined;
        ratings?: string[] | undefined;
        reviews?: string[] | undefined;
        wishlist?: string[] | undefined;
        refreshToken?: string | undefined;
        payments?: string[] | undefined;
        verificationToken?: string | undefined;
        resetPasswordToken?: string | undefined;
        resetPasswordExpires?: Date | undefined;
    };
}, {
    body: {
        id: string;
        name: string;
        email: string;
        password: string;
        role: TUserRoles;
        auth: {
            provider: string;
            providerId: string;
        }[];
        isActive?: TIsActiveStatus | undefined;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
        bio?: string | undefined;
        isVerified?: boolean | undefined;
        bookings?: string[] | undefined;
        orders?: string[] | undefined;
        services?: string[] | undefined;
        ratings?: string[] | undefined;
        reviews?: string[] | undefined;
        wishlist?: string[] | undefined;
        refreshToken?: string | undefined;
        payments?: string[] | undefined;
        verificationToken?: string | undefined;
        resetPasswordToken?: string | undefined;
        resetPasswordExpires?: Date | undefined;
    };
}>;
export declare const createStaffValidationSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        role: z.ZodEnum<[TUserRoles.ADMIN, TUserRoles.SUPER_ADMIN, TUserRoles.MODERATOR, TUserRoles.MANAGER]>;
        profilePicture: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phoneNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        role: TUserRoles.ADMIN | TUserRoles.SUPER_ADMIN | TUserRoles.MODERATOR | TUserRoles.MANAGER;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        role: TUserRoles.ADMIN | TUserRoles.SUPER_ADMIN | TUserRoles.MODERATOR | TUserRoles.MANAGER;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        email: string;
        password: string;
        role: TUserRoles.ADMIN | TUserRoles.SUPER_ADMIN | TUserRoles.MODERATOR | TUserRoles.MANAGER;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
    };
}, {
    body: {
        name: string;
        email: string;
        password: string;
        role: TUserRoles.ADMIN | TUserRoles.SUPER_ADMIN | TUserRoles.MODERATOR | TUserRoles.MANAGER;
        profilePicture?: string | undefined;
        address?: string | undefined;
        phoneNumber?: string | undefined;
    };
}>;
export declare const updateUserRoleValidationSchema: z.ZodObject<{
    body: z.ZodObject<{
        userId: z.ZodString;
        role: z.ZodNativeEnum<typeof TUserRoles>;
    }, "strip", z.ZodTypeAny, {
        role: TUserRoles;
        userId: string;
    }, {
        role: TUserRoles;
        userId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        role: TUserRoles;
        userId: string;
    };
}, {
    body: {
        role: TUserRoles;
        userId: string;
    };
}>;
