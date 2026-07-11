
import type {  Request, Response } from "express";
import express from "express";
import  cors  from 'cors';
import cookieParser from "cookie-parser";
import { router } from "./app/routes/index.js";
import { globalErrorHandler } from "./app/middlewares/GlobleErrorHandler.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
    
app.use("/api/v1", router);

 app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Arzuma backend server!" });
});




app.use(globalErrorHandler);

export default app;