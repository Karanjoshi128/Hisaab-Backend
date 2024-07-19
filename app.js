import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'https://hisaab-frontend.vercel.app', // Production
    credentials: true // Allow credentials to be sent
}));
app.use(express.json());
app.use(cookieParser());

import userRouter from "./src/routes/user.routes.js";
app.use("/api/users/v1" , userRouter); 

export {app};
