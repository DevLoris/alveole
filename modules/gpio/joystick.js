const {SPHERO_CACHE} = require("../sphero/lib/spherocache");
const {PREMADE_MOVE} = require("../sphero/lib/move/premade-move");
const Gpio = require('pigpio').Gpio; //include pigpio to interact with the GPIO

class Joystick {
    /**
     * @param {String} sphero
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

        // this.directions = { front: false, back: false, left: false, right: false }
        this.directions = [0, 0, 0, 0] // front, back, left, right
    }

    onJoystickAction() {
        this.front.on('alert', (level) => {
            this.directions[0] = Number(!level)
            this.directionChanged();
        });
        this.back.on('alert', (level) => {
            this.directions[1] = Number(!level)
            this.directionChanged()
        });
        this.left.on('alert', (level) => {
            this.directions[2] = Number(!level)
            this.directionChanged();
        });
        this.right.on('alert', (level) => {
            this.directions[3] = Number(!level)
            this.directionChanged();
        });
    }

    directionChanged(){
        let move = null; 

        if(typeof this.sphero === "string") {
            if(SPHERO_CACHE.has(this.sphero))
                this.sphero = SPHERO_CACHE.get(this.sphero)
        }

        switch (this.directions.join('')){
            case '1000' : // front
                move = 'front'
                this.sphero.move(PREMADE_MOVE.FRONT)
                break;
            case '0100' : // back
                this.sphero.move(PREMADE_MOVE.BACK)
                move = 'back'
                break;
            case '0010' : // left
                this.sphero.move(PREMADE_MOVE.LEFT)
                move = 'left'
                break;
            case '0001' : // right
                this.sphero.move(PREMADE_MOVE.RIGHT)
                move = 'right'
                break;
            case '1010' : // front-left
                move = 'front-left'
                this.sphero.move(PREMADE_MOVE.FRONT_LEFT)
                break;
            case '1001' : // front-right
                move = 'front-right'
                this.sphero.move(PREMADE_MOVE.FRONT_RIGHT)
                break;
            case '0110' : // back-left
                move = 'back-left'
                this.sphero.move(PREMADE_MOVE.BACK_LEFT)
                break;
            case '0101' : // back-right
                move = 'back-right'
                this.sphero.move(PREMADE_MOVE.BACK_RIGHT)
                break;
            default:
                move = 'stop'
                this.sphero.stopMove()
                break
        }

        console.log(move)
    }

    echo() {
        console.log("test")
    }
}

module.exports.Joystick = Joystick;
