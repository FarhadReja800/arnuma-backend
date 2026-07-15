import type { NextFunction, Request, Response } from "express";
import { TUserRoles } from "../modules/user/user.interface";
declare const auth: (...requiredRoles: TUserRoles[]) => (req: Request, res: Response, next: NextFunction) => void;
export default auth;
