const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    player: { type: String, required: true },
    wins: { type: String, required: true }
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;
