const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/codauth"
);

const statsSeed = [
  {
    player: "testPlayer1",
    wins: "1"
  },
  {
    player: "testPlayer2",
    wins: "4"
  }
];

db.Stats
  .remove({})
  .then(() => db.Stats.collection.insertMany(statsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
