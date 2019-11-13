const {Sphero} = require("../sphero/lib/sphero");
const {Joystick} = require("./joystick");
const JOYSTICKS = {
    "1": new Joystick(new Sphero(null), 18, 17, 27, 4)
}

module.exports.JOYSTICKS = JOYSTICKS;
