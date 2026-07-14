import { model, Schema } from "mongoose";
import { TBenefit } from "./benefit.interface";


const BenefitSchema = new Schema<TBenefit>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
}, {timestamps:true})


export const Benefit = model<TBenefit>("Benefit", BenefitSchema)