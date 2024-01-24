import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  imgurl: String,
});

export const Card = mongoose.model("Card", cardSchema);
