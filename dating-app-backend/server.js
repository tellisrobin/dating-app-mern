import express from "express";
import mongoose from "mongoose";

const app = process.env.port || express();
const port = 8001;

app.get("/", (req, res) => res.status(200).send("Hello Robin"));

app.listen(port, () => console.log(`Listening on port ${port}`));
