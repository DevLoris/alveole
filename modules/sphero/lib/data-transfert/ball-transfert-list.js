let {BallTransfert} = require('./ball-transfert');
let {SPHERO_VARS} = require('../sphero-vars');

const TRANSFERT = {
    LIST: [
        new BallTransfert(SPHERO_VARS.BALL_1, SPHERO_VARS.BALL_2, (from, to) => {
            from.toggleMove(false);
            to.toggleMove(true);
        }),
        new BallTransfert(SPHERO_VARS.BALL_2, SPHERO_VARS.BALL_3, (from, to) => {
            from.toggleMove(false);
            to.toggleMove(true);
        })
    ]
};

module.exports.TRANSFERT = TRANSFERT;