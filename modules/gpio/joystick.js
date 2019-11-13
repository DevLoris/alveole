const {PREMADE_MOVE} = require("../sphero/lib/move/premade-move");
const Gpio = require('pigpio').Gpio; //include pigpio to interact with the GPIO

class Joystick {
    /**
     * @param {Sphero} sphero
     */
    constructor(sphero, topPin, bottomPin, leftPin, rightPin){
        this.gpio = {}
        this.gpio.top = topPin
        this.gpio.bottom = bottomPin
        this.gpio.left = leftPin
        this.gpio.right = rightPin

        this.sphero = sphero;

        this.init();
        this.onJoystickAction()
    }

    init() {

        // GPIO
        this.top = new Gpio(this.gpio.top, { mode: Gpio.INPUT, alert: true })
        this.bottom = new Gpio(this.gpio.bottom, { mode: Gpio.INPUT, alert: true })
        this.left = new Gpio(this.gpio.left, { mode: Gpio.INPUT, alert: true })
        this.right = new Gpio(this.gpio.right, { mode: Gpio.INPUT, alert: true })

        this.top.glitchFilter(5000);
        this.bottom.glitchFilter(5000);
        this.left.glitchFilter(5000);
        this.right.glitchFilter(5000);

        this.directions = { top: false, bottom: false, left: false, right: false }
    }

    onJoystickAction() {
        this.top.on('alert', (level) => {
            this.directions.top = !level
            this.directionChanged();
        });
        this.bottom.on('alert', (level) => {
            this.directions.bottom = !level
            this.directionChanged();
        });
        this.left.on('alert', (level) => {
            this.directions.left = !level
            this.directionChanged();
        });
        this.right.on('alert', (level) => {
            this.directions.right = !level
            this.directionChanged();
        });
    }

    directionChanged(){
        console.log(this.directions)
        let action = null;
        switch (this.directions){
            case {front: true, back: false, left: false, right: false} :
                action = PREMADE_MOVE.FRONT_1
                break;
            case {front: false, back: true, left: false, right: false} :
                action = PREMADE_MOVE.BACK_1
                break;
            case {front: false, back: false, left: true, right: false} :
                action = PREMADE_MOVE.LEFT_1
                break;
            case {front: false, back: false, left: false, right: true} :
                action = PREMADE_MOVE.RIGHT_1
                break;
        }
        this.execSpheroAction(action)
    }

    execSpheroAction(action) {
        this.sphero.move(action)
    }

    echo() {
        console.log("test")
    }
}

module.exports.Joystick = Joystick;
