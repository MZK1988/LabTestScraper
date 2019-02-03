// labTests Model
// ==============

// Require mongoose
var mongoose = require("mongoose");

//Create a schema class using mongoose's schema method

var Schema = mongoose.Schema;

//Create the labTestSchema with our schema class

var labTestSchema = new Schema({

    //this is the name of the lab test that gets scraped
    labTest: {
        type: String,
        required: true,
        unique: { index: { unique: true } }
    },
    //this is the url that gets scraped then concatenated to the base url
    link: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
      }
})

//Create the labTest model using the labTestSchema

var labTest = mongoose.model("labTest", labTestSchema);

//Export the headline model

module.exports = labTest;
