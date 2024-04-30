import dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./db/dbConnect.js";
import { app } from "./app.js";

dbConnect()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.listen(process.env.PORT, (req, res) => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
