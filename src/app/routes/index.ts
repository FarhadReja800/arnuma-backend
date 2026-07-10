import { Router } from "express";
import { userRoutes } from "../modules/user/user.route.js";


export const router = Router();

 const moduleRoutes = [
    {
        path: "/user",
        router: userRoutes.router
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.router);
});