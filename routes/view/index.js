var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  db.labTest.find({ saved: false })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("home", { articles: dbArticles });
    });
});