// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitList = [];

//  HTML Routes
app.get("/", function (req, res) {
  res.send("Welcome to the Hot Restaurants page!");
});

app.get("/api/tables/:", function (req, res) {
  res.send("");
});

//  API Routes
app.get("/", function (req, res) {
  res.send("Welcome to the Hot Restaurants page!");
});

app.get("/api/tables", function (req, res) {
  res.send("");
});
