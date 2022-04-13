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
        author: 'Tui T. Sutherland',
        status: 'FAVORITE',
        series: 'Wings of Fire',
        book: 1
    });
    await Book.create({
        title: 'The Lost Hier',
        desc: "After narrowly escaping from the Sky Kingdom, Tsumani leads the dragonets south away from Burn's territory to the Kingdom of the Sea. Where they find many surprisies, not all of them friendly.",
        author: 'Tui T. Sutherland',
        status: 'FAVORITE',
        series: 'Wings of Fire',
        book: 2
    });
    await Book.create({
        title: 'Malice',
        desc: "Corban is a normal boy, watching other boys grow into warriors, he yearns to join them. However it is only when he discovers that war has come to his home does he realize what it means to be a Man.",
        status: 'FAVORITE',
        series: 'The Banished Lands',
        book: 1
    });
    await Book.create({
        title: 'The Unwanteds',
        desc: "After Alex and a group of others are condemmed to death for showing signs of 'Creativity'. He discovers the wonderful would of Artime, created by a great Magician Marcus Today, saved he rejoices learns wonderful things. However after awhile he begins to think of his twin brother Aaron, who should be here with him, potentially exposing the magic world.",
        status: 'FAVORITE',
        series: 'The Unwanteds',
        book: 1
    });
    console.log("Wonderful pages of paper loaded!");
    mongoose.disconnect()
}

bookCreate();