// Controller for our headlines
// ============================
var db = require("../models");

//Find all lab tests and send them back to the user

//This will be used in the api route labTests
module.exports = {
    findAll: function(req, res) {
        db.labTests
        .find(req.query)
        .then(function(dblabTests) {
            res.json(dblabTests);
        })        
    }
}