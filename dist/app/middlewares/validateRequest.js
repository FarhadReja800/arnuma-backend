"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => {
    return async (req, res, next) => {
        console.log("[validateRequest] incoming request:", {
            method: req.method,
            url: req.originalUrl,
            contentType: req.headers["content-type"],
            body: req.body,
        });
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            });
            next();
        }
        catch (error) {
            console.error("[validateRequest] Zod Error details:", error);
            next(error);
        }
    };
};
exports.default = validateRequest;
//# sourceMappingURL=validateRequest.js.map