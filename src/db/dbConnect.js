import mongoose from "mongoose";


export const dbConnect = async () => {
    try {
        const DB_NAME = "Hisaab"
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URII}/${DB_NAME}`
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
