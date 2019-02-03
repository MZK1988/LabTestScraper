var router = require("express").Router();
var fetchRoutes = require("./fetch");
var labTestsRoutes = require("./labTests");
//This is where we would define variables for our routes
//1. var noteRoutes = require("./notes");
//2. var headlineRoutes = require("./headlines");
//3. var clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/labTests", labTestsRoutes);
//This is where we would add additional routes like in previous examples
//1. router.use("/notes", noteRoutes);
//2. router.use("/headlines", headlineRoutes);
//3. router.use("/clear", clearRoutes);

module.exports = router;