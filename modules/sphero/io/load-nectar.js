const {SpheroJsonAnim} = require("../lib/utils/sphero-json-anim");
const {SPHERO_VARS} = require("../lib/sphero-vars");
const {PREMADE_MOVE} = require("../lib/move/premade-move");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('load-nectar', function () {
            let ball =  SPHERO_CACHE.get(SPHERO_VARS.BALL_1);
            if(ball !== undefined && SPHERO_VARS.ACTIVE_MODULE === 0) {
                SpheroJsonAnim.play("nectar", ball, () => {
                    ball.allowMove = true;
                    ball.state = SPHERO_VARS.STATES.NECTAR;
                    SPHERO_VARS.ACTIVE_MODULE = 1;
                });
            }
        });
    });
};