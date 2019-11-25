const {SPHERO_VARS} = require("../../../sphero/lib/sphero-vars");
const {SPHERO_CACHE} = require("../../../sphero/lib/spherocache");
const global = require("../../../../core/global");
let pushFinalButton = () => {
    // RESET MODULE
    SPHERO_VARS.ACTIVE_MODULE = 0;

    global.io.emit("sphero-reset", "");

    // RESET BALL
    let ball_1 = SPHERO_CACHE.get(SPHERO_VARS.BALL_1);
    if(ball_1 !== undefined) {
        ball_1.allowMove = false;
        ball_1.state = SPHERO_VARS.STATES.NECTAR;
    }

    let ball_2 = SPHERO_CACHE.get(SPHERO_VARS.BALL_2);
    if(ball_2 !== undefined) {
        ball_1.allowMove = false;
        ball_2.state = SPHERO_VARS.STATES.INACTIVE;
        ball_2.spamed = false;
        ball_2.spamed_time = 0;
    }

    let ball_3 = SPHERO_CACHE.get(SPHERO_VARS.BALL_3);
    if(ball_3 !== undefined) {
        ball_1.allowMove = false;
        ball_3.state = SPHERO_VARS.STATES.INACTIVE;
    }
};

module.exports.pushFinalButton = pushFinalButton;