'use strict';

const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    cuisine: {type: String},
    recipe: {type: String}
})

const mealModel = mongoose.model('meal', mealSchema)
module.exports = mealModel;