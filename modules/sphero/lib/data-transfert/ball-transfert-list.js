const {PREMADE_MOVE} = require("../move/premade-move");
const {SpheroJsonAnim} = require("../utils/sphero-json-anim");
let {BallTransfert} = require('./ball-transfert');
let {SPHERO_VARS} = require('../sphero-vars');
let {SPHERO_CACHE} = require('../spherocache');

const TRANSFERT = {
    LIST: [
        new BallTransfert(SPHERO_VARS.BALL_1, SPHERO_VARS.BALL_2, (from, to) => {
            from.toggleMove(false);
            from.stopMove();
            SpheroJsonAnim.play('tptransparent', from);
            SpheroJsonAnim.play('nectar', to, () => {
                SPHERO_VARS.ACTIVE_MODULE = 2;
                to.toggleMove(true);
                to.state = SPHERO_VARS.STATES.NECTAR
                SPHERO_CACHE.get(SPHERO_VARS.BALL_3).resetTransfer();
            });
            console.log("FROM BALL 1 -> BALL 2")
        }),
        new BallTransfert(SPHERO_VARS.BALL_2, SPHERO_VARS.BALL_3, (from, to) => {
            SPHERO_VARS.ACTIVE_MODULE = 3;
            from.toggleMove(false);
            to.toggleMove(true);
            to.state = SPHERO_VARS.STATES.MIEL
            from.stopMove();
            SpheroJsonAnim.play('tptransparent', from);
            SpheroJsonAnim.play('test-2', to);
            console.log("FROM BALL 2 -> BALL 3")
        })
    ]
};

module.exports.TRANSFERT = TRANSFERT;
