


var axios = require("axios");
var cheerio = require("cheerio");
// var scrape = require("../scripts/scrape");

// scrape();
var scrapeOne = function() {
    return axios.get("https://labtestsonline.org/tests/17-hydroxyprogesterone").then(function(res) {
        var $ = cheerio.load(res.data);

        console.log("scraping")

        $(".grid-wrapper").each(function (i, element) {
            console.log("Grid Wrapper")

            var titleRaw = $(this)
                .find(".field-item")
                .text();

            var titleAndDescription = titleRaw.split("?");

            var title = titleAndDescription[0];
            var description = titleAndDescription[1];

            console.log(title);
            console.log(description);

        })


        $("#Common_Questions").each(function (i, element) {
            console.log("Accordian Element")

            var descriptionLarge = $(this)
                .find(".field-item")
                .text();

            var descriptionLargeStructureOne = descriptionLarge.split("?");

            var commonQuestionOne = descriptionLargeStructureOne[0];
            var commonAnswer = descriptionLargeStructureOne[1];
            var commonQuestionTwo = descriptionLargeStructureOne[2];


            console.log(commonQuestionOne);
            console.log(commonAnswer);
            console.log("_________________");
            console.log(commonQuestionTwo);



        })




// Title:
// Div Class = grid-wrapper
// -Div Class = field-wrapper field field-paragraph--field-label field-name-field-label field-type-string field-label-hidden
// --Div Class = field-items
// ---Div Class = field-item.text()=title


// Description:
// Div Class = grid wraper
// -Div Class = field-wrapper field field-paragraph--field-label field-name-field-label field-type-string field-label-hidden
// --Div Class = field-items
// ---Div Class = field-item
// ----P = description
// -----a = link to condition







    })
}

scrapeOne();

