import express from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())



import userRouter from "./src/routes/user.routes.js"
app.use("/api/users/v1" , userRouter); 

export {app};
