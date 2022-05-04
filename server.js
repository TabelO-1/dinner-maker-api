"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const db = mongoose.connection;
const Meal = require("./models/meals");

mongoose.connect(process.env.MONGO_CONNECT);
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", (_) => {
  console.log("Mongo Atlas connection sucessful");
});

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
  response.send("test request received");
});
app.get("/meals", getMeals);
app.post("/meals", createMeals);
app.delete("/meals/:id", deleteMeals)
async function getMeals(request, response) {
  try {
    const meals = await Meal.find({});
    response.status(200).send(meals);
  } catch (e) {
    console.error(e);
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR")
  }
}
async function createMeals(request, response) {
  try {
    const meal = await Meal.create(request.body);
    response.status(200).send(meal);
  } catch(e){
    console.error(e)
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR")
  }
}
async function deleteMeals(request, response) {
  try {
    const id = request.params.id;
    console.log(`Meal Delete id: ${id}`);
    await Meal.findByIdAndDelete(id);
    response.status(204).send("Meal Sucessfully deleted");
    console.log("Meal Sucessfully Deleted.")
  } catch(e) {
    console.error(e)
    response.status(500).send("1NTERNA1 5ERVAR 3R4AR");
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
