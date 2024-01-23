import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURL } from "./config.js";

const app = express();
const port = process.env.port || 8001;

app.get("/", (req, res) => res.status(200).send("Hello Robin"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
