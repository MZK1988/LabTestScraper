var router = require('express').Router();


var apiRoutes = require('./api');
var viewRoutes = require('./view');

//it would appear that api routes would require a /api added to the base URL prior to any additional routes
router.use('/api', apiRoutes);



//it would appear that views are pushed in response to http requests 
router.use('/', viewRoutes);

module.exports = router;