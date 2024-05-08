import { app } from "./app.js";
import { connectDB } from "./db/db.js";
import { ApiError } from "./utils/ApiError.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(" server is up and running at "+process.env.PORT || 8000)
    })
})
.catch(()=>{
    console.log("MONGO db connection failed !!! ", err);
})
// mongodb://localhost:27017