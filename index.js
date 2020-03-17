const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let weekdayItems = [];
let weekendItems = [];
app.set("view engine", "ejs");
//must be below the app constant.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/weekday", function (req, res) {
  res.render("list", {
    listTitle: "Work Day List",
    newListItems: weekdayItems
  });
});
app.post("/", function (req, res) {
  let item = req.body.newTask;
  if (req.body.list === "Weekday") {
    weekdayList.push(item);
    res.redirect("/workday");
  } else {
    weekendItems.push(item);
    res.redirect("/weekend");
  }
});
app.get("/weekend", function (req, res) {
  res.render("list", { listTitle: "Weekend", newListItems: weekendItems });
});
app.listen(3003, function () {
  console.log("Server started on port 3003.");
});
