import { User } from "./user.model.js";
import type { TUser } from "./user.interface.js";


const createUserService = async (payload : Partial<TUser>) => {
  const result = await User.create(payload);
  return result;
}

export const userService = {
  createUserService
};