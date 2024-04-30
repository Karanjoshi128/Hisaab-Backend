import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            "Connection to the database was established successfully",
            connectionInstance.connection.host
        );
    } catch (error) {
        console.log("Error in connecting to database : ", error.message);
        process.exit(1);
    }
};
