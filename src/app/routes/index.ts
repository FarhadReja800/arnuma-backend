import { Router } from "express";
import { userRoutes } from "../modules/user/user.route.js";
import { HomeBannerRoutes } from "../modules/homeBanner/homeBanner.route.js";
import { BenefitRoutes } from "../modules/benefit/benefit.route.js";
import { CategoryRoutes } from "../modules/category/category.route.js";
import { ProductRoutes } from "../modules/product/product.route.js";
import { NewCollectionRoutes } from "../modules/newCollection/newCollection.route.js";
import { HomeVideoRoutes } from "../modules/video/video.route.js";


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
    },
    {
        path: "/benefit",
        router: BenefitRoutes
    },
    {
        path: "/category",
        router: CategoryRoutes
    },
    {
        path: "/product",
        router: ProductRoutes
    },
    {
        path: "/new-collection",
        router: NewCollectionRoutes
    },
    {
        path: "/video",
        router: HomeVideoRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.router);
});