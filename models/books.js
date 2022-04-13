'use strict';

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {type: String},
    desc: {type: String},
    author: {type: String},
    status: {type: String, uppercase: true, enum: ["FAVORITE", "RECOMENDED"]},
    series: {type: String},
    book: {type: Number}
})

const bookModel = mongoose.model('book', bookSchema)
module.exports = bookModel;