"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const homeBanner_route_1 = require("../modules/homeBanner/homeBanner.route");
const benefit_route_1 = require("../modules/benefit/benefit.route");
const category_route_1 = require("../modules/category/category.route");
const product_route_1 = require("../modules/product/product.route");
const newCollection_route_1 = require("../modules/newCollection/newCollection.route");
const video_route_1 = require("../modules/video/video.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        router: user_route_1.userRoutes.router
    },
    // Add more routes for other modules here
    {
        path: "/home-banner",
        router: homeBanner_route_1.HomeBannerRoutes
    },
    {
        path: "/benefit",
        router: benefit_route_1.BenefitRoutes
    },
    {
        path: "/category",
        router: category_route_1.CategoryRoutes
    },
    {
        path: "/product",
        router: product_route_1.ProductRoutes
    },
    {
        path: "/new-collection",
        router: newCollection_route_1.NewCollectionRoutes
    },
    {
        path: "/video",
        router: video_route_1.HomeVideoRoutes
    }
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.router);
});
//# sourceMappingURL=index.js.map