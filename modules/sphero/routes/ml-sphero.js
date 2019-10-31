const Route = require("../../../core/models/route");
let express = require('express');
const {ML_CACHE} = require("../lib/mlcache");
let router = express.Router();

router.get('/', function(req, res) {
    res.send(ML_CACHE.cache);
});
router.get('/reset', function(req, res) {
    ML_CACHE.cache = []
});


module.exports = new Route('ml-sphero', router);