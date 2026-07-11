import { Router } from "express";
import { userRoutes } from "../modules/user/user.route.js";
import { HomeBannerRoutes } from "../modules/homeBanner/homeBanner.route.js";


export const router = Router();

 const moduleRoutes = [
    {
        path: "/user",
        router: userRoutes.router
    },
    // Add more routes for other modules here
    {
        path: "/home-banner",
        router: HomeBannerRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.router);
});