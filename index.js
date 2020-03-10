//base express code.

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");//brings in date.js module
const app = express();
let items = [];
let workItems = [];
app.set("view engine", "ejs");
//must be below the app constant.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function(req, res) {
  
let day = date.getDay();//use date() module
  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", function(req, res) {
  let item = req.body.newTask;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function(req, res) {
  res.render("list", { listTitle: "work", newListItems: workItems });
});
app.get("/about", function(req, res) {
  res.render("about");
});
app.post("/work", function(req, res) {
  let item = req.body.newTask;
  workItems.push(item);
  res.redirect("/work");
});/*
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});*/
