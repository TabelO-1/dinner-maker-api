"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const db = mongoose.connection;
const Book = require("./models/books");

mongoose.connect(process.env.MONGO_CONNECT);
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", (_) => {
  console.log("Mongo Atlas connection sucessful");
});

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
  response.send("test request received");
});
app.get("/books", getBooks);
app.post("/books", createBooks);
app.delete("/books/:id", deleteBooks)
async function getBooks(request, response) {
  try {
    const books = await Book.find({});
    response.status(200).send(books);
  } catch (e) {
    console.error(e);
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR")
  }
}
async function createBooks(request, response) {
  try {
    const book = await Book.create(request.body);
    response.status(200).send(book);
  } catch(e){
    console.error(e)
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR")
  }
}
async function deleteBooks(request, response) {
  try {
    const id = request.params.id;
    console.log(`Book Delete id: ${id}`);
    await Book.findByIdAndDelete(id);
    response.status(204).send("Book Sucessfully deleted");
    console.log("Book Sucessfully Deleted.")
  } catch(e) {
    console.error(e)
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR");
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
