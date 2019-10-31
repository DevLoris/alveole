const {Move} = require("./move");

const PREMADE_MOVE = {
    FRONT_1 :   new Move(0, 255, 2),
    LEFT_1 :    new Move(270, 255, 2),
    RIGHT_1 :   new Move(90, 255, 2),
    BACK_1 :    new Move(180, 255, 2),
};

module.exports.PREMADE_MOVE = PREMADE_MOVE;