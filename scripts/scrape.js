// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape that lab tests online website

var scrape  = function() {
    return axios.get
    //the "res" part of the promise contains the response of hitting the website included
    ("https://labtestsonline.org/tests-index").then(function(res) {
        var $ = cheerio.load(res.data);

        console.log("scraping");

        //making an empty array to save our lab test info
        var labTests = [];

        $(".field-content").each(function(i, element) {

            
            //In each field content section, we grab the children <a> elements

            //1.we first store the title of the test to the test variable

            var test = $(this)
                .find("a")
                .text()
                .trim();
            

            //2.we then store the link to the descriptions on lab tests in the url variable

            var url = $(this)
                .find("a")
                .attr("href");

            if(test && url) {
                var testNeat = test.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var urlNeat = url.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim(); 

                var dataToAdd = {
                    labTest: testNeat,
                    link: "https://labtestsonline.org" + url
                }

                labTests.push(dataToAdd);
                console.log(labTests);
            }  
        })
        return labTests;
    })
}




module.exports = scrape;