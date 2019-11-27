const {SpheroJsonAnim} = require("../lib/utils/sphero-json-anim");
const {SPHERO_CACHE} = require("../lib/spherocache");
const {SPHERO_VARS} = require("../lib/sphero-vars");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('active', function () {
            SPHERO_VARS.ACTIVE_MODULE = 1;
            SpheroJsonAnim.play('tptransparent', SPHERO_CACHE.get(SPHERO_VARS.BALL_1));
        });
    });
};