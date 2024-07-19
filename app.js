import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(cors({
    // origin: 'http://localhost:5173', // Development
    origin: 'https://hisaab-frontend.vercel.app/', // Production
    credentials: true // Allow credentials to be sent
  }));
app.use(express.json());

import userRouter from "./src/routes/user.routes.js";
app.use("/api/users/v1" , userRouter); 

export {app};
