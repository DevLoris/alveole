const {MOVE_VARS} = require("./move-vars");
const {Move} = require("./move");

const PREMADE_MOVE = {
    FRONT :   new Move(0, MOVE_VARS.DEFAULT_SPEED),
    LEFT :    new Move(270, MOVE_VARS.DEFAULT_SPEED),
    RIGHT :   new Move(90, MOVE_VARS.DEFAULT_SPEED),
    BACK :    new Move(180, MOVE_VARS.DEFAULT_SPEED),
    FRONT_LEFT :    new Move(315, MOVE_VARS.DEFAULT_SPEED),
    FRONT_RIGHT :    new Move(45, MOVE_VARS.DEFAULT_SPEED),
    BACK_LEFT :    new Move(225, MOVE_VARS.DEFAULT_SPEED),
    BACK_RIGHT :    new Move(135, MOVE_VARS.DEFAULT_SPEED),
};

module.exports.PREMADE_MOVE = PREMADE_MOVE;
