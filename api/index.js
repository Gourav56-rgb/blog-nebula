import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js"

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const server = express();

server.use(express.json());

server.listen(3000, () => {
  console.log("Server is running");
});

server.use("/api/post", postRoutes)
