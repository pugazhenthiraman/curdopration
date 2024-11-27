const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },

  year: {
    required: true,
    type: String,
  },

  runTime: {
    required: true,
    type: String,
  },

  language: {
    required: true,
    type: String,
  },

  plot: {
    type: String,
  },
  posterImage: {
    required: true,
    type: Array,
  },
  imdbID: {
    type: String,
  },
});

module.exports = mongoose.model("imdb", dataSchema);
