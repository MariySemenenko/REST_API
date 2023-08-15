const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
  title: String,
  year: Number,
  language: String,
});

module.exports = model("film", filmSchema);


