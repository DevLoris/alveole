const {PREMADE_MOVE} = require("../sphero/lib/move/premade-move");
const Gpio = require('pigpio').Gpio; //include pigpio to interact with the GPIO

class Joystick {
    /**
     * @param {Sphero} sphero
     */
    constructor(sphero, frontPin, backPin, leftPin, rightPin){
        this.gpio = {}
        this.gpio.front = frontPin
        this.gpio.back = backPin
        this.gpio.left = leftPin
        this.gpio.right = rightPin

        this.sphero = sphero;

        this.init();
        this.onJoystickAction()
    }

    init() {

        // GPIO
        this.front = new Gpio(this.gpio.front, { mode: Gpio.INPUT, alert: true })
        this.back = new Gpio(this.gpio.back, { mode: Gpio.INPUT, alert: true })
        this.left = new Gpio(this.gpio.left, { mode: Gpio.INPUT, alert: true })
        this.right = new Gpio(this.gpio.right, { mode: Gpio.INPUT, alert: true })

        this.front.glitchFilter(5000);
        this.back.glitchFilter(5000);
        this.left.glitchFilter(5000);
        this.right.glitchFilter(5000);

        this.directions = { front: false, back: false, left: false, right: false }
    }

    onJoystickAction() {
        this.top.on('alert', (level) => {
            this.directions.front = !level
            this.directionChanged();
        });
        this.bottom.on('alert', (level) => {
            this.directions.back = !level
            this.directionChanged()
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
        /*
        let move = null;
        switch (this.directions){
            case {front: true, back: false, left: false, right: false} :
                move = 'front'
                break;
            case {front: false, back: true, left: false, right: false} :
                move = 'back'
                break;
            case {front: false, back: false, left: true, right: false} :
                move = 'left'
                break;
            case {front: false, back: false, left: false, right: true} :
                move = 'right'
                break;
        }
        this.execSpheroAction(move)
        */
    }

    execSpheroAction(action) {
        this.sphero.move(action)
    }

    echo() {
        console.log("test")
    }
}

module.exports.Joystick = Joystick;
