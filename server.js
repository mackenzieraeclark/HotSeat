// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Start server.
// =============================================================
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
  res.sendfile(path.join(__dirname, "home.html"));
});

app.get("/reserve/:", function (req, res) {
  res.sendfile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) {
  re.sendfile(path.join(__dirname, "table.html"));
});

// API Routes
app.get("/api/tables", function (req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

for (var i = 0; reservations.length; i++) {
  if (reservations === 5) {
    return reservations;
  } else {
    return waitList;
  }
}
