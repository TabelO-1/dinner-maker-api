'use strict';

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {type: String},
    desc: {type: String},
    status: {type: String, uppercase: true, enum: ["FAVORITE", "RECOMENDED"]}
})

const bookModel = mongoose.model('book', bookSchema)
module.exports = bookModel;