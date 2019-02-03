// Controller for our scraper
// ===========================
var db = require("../models");
var scrape = require("../scripts/scrape");

//when the user hits the api/fetch route, then this page calls the scrape() function in the scripts directory and then inserts our labTests into the database
module.exports = {
    scrapedLabTests: function(req, res) {
        return scrape()
            .then(function(labTests) {
                return db.labTest.create(labTests);
            })
            .then(function(dblabTest) {
                if(dblabTest.length === 0 ) {
                    res.json({
                        message: "No new lab tests today.  Check back tomorrow!"
                    })
                }
                else {
                    res.json({
                        message: "Added " + dblabTest.length + " new lab tests!"
                    })
                }
            })
            .catch(function(err) {
                res.json({
                    message: "Scrape complete!!"
                })
            })
    }   
}