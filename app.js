const express = require("express");
const bodyParser = require("body-parser");
const req = require("express/lib/request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 3000;
//our Module
const ourDay = require("./modules/getToday.js");

var items = [
  "Fetched FROM -> .js file TO -> .ejs file",
  "item1",
  "item2",
  "item3",
];

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.get("/", (req, res) => {
  const theDay = ourDay.getOurDay();
  res.render("blogFromBootsrap", { items, theDay });
});

app.post("/", (req, res) => {
  var nextItem = req.body.nextItem;
  items.push(nextItem);
  res.redirect("/");
});
