import { model, Schema } from "mongoose";
import { TIsActiveStatus, TUserRoles, type TUser } from "./user.interface.js";


const authProviderSchema = new Schema({
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
}, { _id: false });

const userSchema = new Schema<TUser>({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    role: {
        type: String, 
        enum: Object.values(TUserRoles),
        default: TUserRoles.USER,
    },
    bio: { type: String },
    isActive: {
         type: String, 
        enum: Object.values(TIsActiveStatus),
        default: TIsActiveStatus.ACTIVE,
     
     },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    auth: [authProviderSchema],
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],        

}, 
    
    {
         timestamps: true ,
         versionKey: false

    });

export const User = model<TUser>("User", userSchema);


 