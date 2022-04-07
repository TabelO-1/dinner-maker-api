'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require(mongoose);
const db = mongoose.connection

mongoose.connect(process.env.MONGO_CONNECT);
db.on('error', console.error.bind(console, "connection error: "))
db.once('open', _ => {
  console.log('Mongo Atlas connection sucessful');
})

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
