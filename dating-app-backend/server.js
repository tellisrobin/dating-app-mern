import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURL } from "./config.js";
import { Card } from "./models/cardModel.js";

const app = express();
const port = process.env.port || 8001;
app.use(express.json());

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("Connected To DB");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.status(200).send("Hello Robin"));

app.post("/dating/cards", async (req, res) => {
  //const card = req.body;
  try {
    // console.log(req);
    let newcard = {
      name: req.body.name,
      imgurl: req.body.imgurl,
    };
    let card = await Card.create(newcard);
    console.log(card);
    return res.status(200).send(card);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/dating/cards", async (req, res) => {
  try {
    let cards = await Card.find({});
    return res.status(200).send({
      count: cards.length,
      data: cards,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});
