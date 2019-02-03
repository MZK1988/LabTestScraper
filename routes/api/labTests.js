var router = require("express").Router();
var labTests = require("../../controllers/labTests");

router.get("/", labTests.findAll);

module.exports = router;