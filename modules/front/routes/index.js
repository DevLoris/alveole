const Route = require("../../../core/models/route");
let express = require('express');
let router = express.Router();

router.get('', function(req, res) {
    res.render("index.twig");
});
router.get('/test', function(req, res) {
    res.send("ok");
});


module.exports = new Route('/', router);