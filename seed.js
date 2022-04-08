'use strict';

require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_CONNECT);

const Book = require("./models/books.js");

async function bookCreate() {
    console.log("Wonderful pages of paper loading...!");

    await Book.create({
        title: 'The Dragonet Prophecy',
        desc: "5 Dragonets set off to stop a war that has been waging between the dragon kingdoms for the last 20 years, though things aren't as easy as the dragonets may have thought.",
        status: 'FAVORITE'
    });
    console.log("Wonderful pages of paper loaded!");
    mongoose.disconnect()
}

bookCreate();