var express = require("express");
var app = express();
var getPalette = require("./lib/getPalette");

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  res.render("index", { palette: getPalette() });
});

app.listen(8000);
