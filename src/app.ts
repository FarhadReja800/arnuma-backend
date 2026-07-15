
import type {  Request, Response } from "express";
import express from "express";
import  cors  from 'cors';
import cookieParser from "cookie-parser";
import { router } from "./app/routes/index";
import { globalErrorHandler } from "./app/middlewares/GlobleErrorHandler";
import path from "path";


const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
    
app.use("/api/v1", router);

 app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Arzuma backend server!" });
});




app.use(globalErrorHandler);

export default app;