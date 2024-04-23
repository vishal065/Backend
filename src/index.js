// require("dotenv").config({ path: "./env" });
// import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// dotenv.config({ path: "./env" });

connectDB()
  .then(
    () =>
      app.on("error", () =>
        console.log("application not able to talk to database")
      ),
    app.listen(process.env.PORT, () =>
      console.log("app is running on port ", process.env.PORT)
    )
  )
  .catch((err) => console.log("mongodb connection failed ", err));

/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error ", () => {
      console.log("application not able to talk to database");
    });
    app.listen(process.env.PORT, () => {
      console.log("app is listening on port", process.env.PORT);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();

*/
