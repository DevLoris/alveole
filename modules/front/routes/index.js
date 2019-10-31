const Route = require("../../../core/models/route");
let express = require('express');
let router = express.Router();

router.get('', function(req, res) {
    res.send("ok");
});
router.get('/test', function(req, res) {
    res.send("ok");
});


module.exports = new Route('/', router);