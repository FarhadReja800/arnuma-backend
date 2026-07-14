import { Types } from "mongoose";

export interface TCategory {
  name: string;
  slug: string;
  parent?: Types.ObjectId | null;
  icon?: string;
  order?: number;
  isActive?: boolean;
}
