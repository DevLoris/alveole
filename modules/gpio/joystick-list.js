const {Joystick} = require("./joystick");
const JOYSTICKS = {
    "1": new Joystick("SB-5D1C", 27, 4, 22, 17),
    "2": new Joystick("SB-2020", 19, 6, 26, 13),
    "3": new Joystick("SB-0994", 16, 21, 12, 20)
}

module.exports.JOYSTICKS = JOYSTICKS;
