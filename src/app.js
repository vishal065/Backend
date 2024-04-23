import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "20kb" })); // accpt json data max 16kb this can be depend on server (form bhara tb humne data liya)
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // space to %20 in-url
app.use(express.static("public")); //pdf img are store in server in public folder
app.use(cookieParser()); // to set and get cookie from user browser securely only server can read and remove

export { app };
