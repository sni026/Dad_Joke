// Configure environment variables

import "dotenv/config";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3001;
const PASSWORD = process.env.PASSWORD;
const admin = process.env.USER;

//Connect to the database
const Db = 'mongodb+srv://'+admin+':'+PASSWORD+'@spawtify.yu6g2tq.mongodb.net/?retryWrites=true&w=majority&appName=Spawtify'

// Creates the express server
const app = express();

app.use(cors());

app.use(express.json());
// app.use(express.static("public"));

// Our routes
app.get("/", (req, res) => {
    return res.json({ message: "Hello, world!" });
});

import apiRoutes from "./routes/api.js";
app.use("/api", apiRoutes);

await mongoose.connect(Db);

// Start the server running.
app.listen(PORT, () => {
    console.log(`CS732 Dad Jokes example backend listening on port ${PORT}`);
});
