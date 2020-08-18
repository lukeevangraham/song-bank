var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var SongSchema = new Schema({
    title: String,
    performer: String,
    dateRecorded: Date
})

var Song = mongoose.model("Song", SongSchema);

module.exports = Song;