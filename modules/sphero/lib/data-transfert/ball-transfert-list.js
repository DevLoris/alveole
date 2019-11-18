const {PREMADE_MOVE} = require("../move/premade-move");
const {SpheroJsonAnim} = require("../utils/sphero-json-anim");
let {BallTransfert} = require('./ball-transfert');
let {SPHERO_VARS} = require('../sphero-vars');

const TRANSFERT = {
    LIST: [
        new BallTransfert(SPHERO_VARS.BALL_1, SPHERO_VARS.BALL_2, (from, to) => {
            from.toggleMove(false);
            from.stopMove();
            to.move(PREMADE_MOVE.FRONT);
            SpheroJsonAnim.play('tptransparent', from);
            SpheroJsonAnim.play('nectar', to, () => {
                to.toggleMove(true);
                to.move(PREMADE_MOVE.FRONT);
            });
            console.log("FROM BALL 1 -> BALL 2")
        }),
        new BallTransfert(SPHERO_VARS.BALL_2, SPHERO_VARS.BALL_3, (from, to) => {
            from.toggleMove(false);
            to.toggleMove(true);
            from.stopMove();
            SpheroJsonAnim.play('tptransparent', from);
            SpheroJsonAnim.play('test-2', to);
            console.log("FROM BALL 2 -> BALL 3")
        })
    ]
};

module.exports.TRANSFERT = TRANSFERT;