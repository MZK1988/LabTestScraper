var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

//this is represented with only a "/" because in the index.js file of the api directory, we specified the "/fetch" route,and more broadly in the index.js file in the more global routes directory, we specified that all api routes would have "/api"
router.get("/", fetchController.scrapedLabTests);

module.exports = router;
