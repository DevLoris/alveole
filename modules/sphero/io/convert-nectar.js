const {SPHERO_VARS} = require("../lib/sphero-vars");
const {PREMADE_MOVE} = require("../lib/move/premade-move");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('convert-nectar', function () {
            let ball =  SPHERO_CACHE.get(SPHERO_VARS.BALL_2);
            if(ball !== undefined && SPHERO_VARS.ACTIVE_MODULE === 2) {
                ball.state = SPHERO_VARS.STATES.BEFORE_MIEL;
            }
        });
    });
};