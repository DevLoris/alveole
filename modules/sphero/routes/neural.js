const Route = require("../../../core/models/route");
let express = require('express');
const {ML_CACHE} = require("../lib/mlcache");
let router = express.Router();

router.all('/', function(req, res) {
    console.log(req);

    res.send("ok2")
});


module.exports = new Route('neural', router);