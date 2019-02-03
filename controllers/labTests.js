// Controller for our headlines
// ============================
var db = require("../models");

//Find all lab tests and send them back to the user

//This will be used in the api route labTests
module.exports = {
    findAll: function(req, res) {
        db.labTest
        .find(req.query)
        .then(function(dblabTest) {
            res.json(dblabTest);
        })        
    }
}