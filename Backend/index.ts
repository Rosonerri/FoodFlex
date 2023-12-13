console.clear()
import express, {Application} from "express"
import cors from "cors"
import env from "dotenv"
import { dbConfig } from "./utils/dbConfig";
import expressSession from "express-session"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import MongoDBStore from "connect-mongodb-session"
import { mainApp } from "./mainApp";



env.config()
const mongoConnect = MongoDBStore(expressSession);

const app: Application = express()
const port = parseInt(process.env.PORT!)

app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(
    expressSession({
        secret: "cookie/session_secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 12,
        },
        // store: new mongoConnect({
        //     uri: process.env.DATABASE_URL,
        //     collection: "session",
        // }),
    })
)
mainApp(app)
 const server = app.listen(port, () =>{
    console.log(port)
    dbConfig()
});

process.on("uncaughtException", (error: Error) =>{
    console.log("uncaughtException:", error)
    process.exit(1)
})

process.on("rejectionHandled", (reason: any) =>{
    console.log("rejectionHandled: ", reason);
    server.close(() =>{
        process.exit(1)
    })
})