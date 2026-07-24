import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { HomeBannerRoutes } from "../modules/homeBanner/homeBanner.route";
import { BenefitRoutes } from "../modules/benefit/benefit.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { ProductRoutes } from "../modules/product/product.route";
import { NewCollectionRoutes } from "../modules/newCollection/newCollection.route";
import { HomeVideoRoutes } from "../modules/video/video.route";
import { NewsRoutes } from "../modules/newsBloog/news.route";


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
    },
    {
        path: "/news",
        router: NewsRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.router);
});