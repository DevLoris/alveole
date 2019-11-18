const {Joystick} = require("./joystick");
const JOYSTICKS = {
    "1": new Joystick("SB-5D1C", 18, 17, 27, 4)
}

module.exports.JOYSTICKS = JOYSTICKS;
