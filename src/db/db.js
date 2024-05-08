import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { ApiError } from "../utils/ApiError.js";

const connectDB = async ()=>
    {
        try {
           const mongooseInstance = await mongoose.
           connect(`${process.env.MONGODB_URI}${DB_NAME}`)
           console.log("database conceted at ",mongooseInstance.connection.host)
           console.log("database is ",mongooseInstance.connection.name)

        } catch (error) {
            console.log("MONGODB connection FAILED ", error);
            process.exit(1)
        }
    }

    export {connectDB}