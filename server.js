const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

// Require all models
let db = require("./models")

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/songbank", { useNewUrlParser: true });

// sample song
var data = {
  title: "10,000 Reasons",
  performer: "Band"
}

// Define API routes here
app.post("/submit", function(req, res) {
  db.Song.create(data)
  .then(function(dbSong) {
    console.log(dbSong)
  }).catch(function(err) {
    console.log(err.message);
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
