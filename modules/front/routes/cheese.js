const Route = require("../../../core/models/route");
let express = require('express');
let router = express.Router();

router.all('/', function(req, res) {
    console.log(req)
    res.send("pic");
});


module.exports = new Route('snap', router);