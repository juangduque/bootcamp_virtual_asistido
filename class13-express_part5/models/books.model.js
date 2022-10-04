// CREACION MODELO BOOKS

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  yearPublication: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isbn: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("Book", bookSchema);
