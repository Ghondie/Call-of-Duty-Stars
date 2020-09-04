const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codSchema = new Schema({
    winner: {
        type: String,
        default: null,
        required: false
    },
    looser: {
        type: String,
        default: null,
        required: false
    },
    players: [{
        matchId: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        player: {
            type: String,
            required: true
        },
        kills: {
            type: Number,
            default: 0,
            required: true
        },
        start_kills: {
            type: Number,
            required: true
        },
        deaths: {
            type: Number,
            default: 0,
            required: true
        },
        start_deaths: {
            type: Number,
            required: true
        },
        downs: {
            type: Number,
            default: 0,
            required: true
        },
        start_downs: {
            type: Number,
            required: true
        },
        revives: {
            type: Number,
            default: 0,
            required: true
        },
        start_revives: {
            type: Number,
            required: true
        }
    }],
    expiration: {
        type: Date,
        required: true
    }
});

const cod = mongoose.model("cod", codSchema);

module.exports = cod;