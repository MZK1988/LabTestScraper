// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape that lab tests online website

var scrape = function () {
    return axios.get
        //the "res" part of the promise contains the response of hitting the website included
        ("https://labtestsonline.org/tests-index").then(function (res) {
            var $ = cheerio.load(res.data);

            console.log("scraping");

            //making an empty array to save our lab test info
            var labTests = [];

            $(".field-content").each(function (i, element) {


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

                if (test && url) {
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
            return labTests;//not sure if you can return somethign in a function and then go into a promise, perhaps can return multiple things
        })
}

var scrapeMore = function () {


    //Loop through the labTests array, if labTests.datatoAdd.labTest = testNeat, then grab more data from the specific test page on labTestsOnline with cheerio and axios and push into a new array called labTestsDetails
    var labTestsDetails = [];
    for (i = 0; i < labTests.length; i++) {
        return
        axios.get("https://labtestsonline.org/tests/" + labTests[i].dataToAdd.labTest).then(function (response) {

            var $ = cheerio.load(response.data);
            console.log("scraping");
            //1.Get data/more detail for each of these tests from the website
            $(".field-wrapper field field-paragraph--field-label field-name-field-label field-type-string field-label-hidden").each(function (i, element) {
                //if field item text = certain text, then store children's text in a variable

                var descriptionOne = $(this)
                    .children()
                    .children()
                    .text()
                    .trim()

                console.log(descriptionOne);
                // Title:
                // Div Class = grid-wrapper
                // -Div Class = field-wrapper field field-paragraph--field-label field-name-field-label field-type-string field-label-hidden
                // --Div Class = field-items
                // ---Div Class = field-item.tex()=title


                // Description:
                // Div Class = grid wraper
                // -Div Class = field-wrapper field field-paragraph--field-label field-name-field-label field-type-string field-label-hidden
                // --Div Class = field-items
                // ---Div Class = field-item
                // ----P = description
                // -----a = link to condition

            })


            //2.Create objects containing the data
            //3.Push those objects into the new labTestsDetails array
            //4.Map and join the two arrays into one array::
            //after we push data into the new array, we can use something simil the following structure  var res = labTests.map(obj => labTestsDetails.find(o => o.labTest === obj.labTest) || obj);

        })
    }

}


scrape();




module.exports = scrape;