'use strict';

require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_CONNECT);

const Meal = require("./models/meals.js");

async function mealCreate() {
    console.log("Wonderful recipe book loading...!");

    await Meal.create({
        name: "Tacos",
        desc: "Mom's Delicous Tacos",
        cusine: "Mexican",
        recipe: "Put meat and sour cream and then lettuce and then cheese and then delicous"
    });
    console.log("Wonderful recipe book loaded!");
    mongoose.disconnect()
}

mealCreate();