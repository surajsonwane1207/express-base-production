import cookieParser from "cookie-parser"
import { configDotenv } from "dotenv"
import express, { json,urlencoded } from "express"

const app = express()
configDotenv()

app.use(json({limit:"16kb"}))
app.use(urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())

export {app}