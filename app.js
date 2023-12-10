import express from 'express'
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import SongRoutes from "./songs/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(cors({
    credentials: true,
    origin: 'https://dapper-biscuit-01c4f7.netlify.app'
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(
    session(sessionOptions)
);

app.use(express.json());
UserRoutes(app);
ReviewRoutes(app);
SongRoutes(app);
app.listen(process.env.PORT || 4000);

const CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.ittazzy.mongodb.net/porkify?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/porkify'
mongoose.connect(CONNECTION_STRING);