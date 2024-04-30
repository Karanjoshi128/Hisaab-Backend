import express from "express";

const app = express();

app.use(express.json());



import userRouter from "./routes/user.routes.js"
app.use("/api/users/v1" , userRouter); 

export {app};
