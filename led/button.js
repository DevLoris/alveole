const Gpio = require('pigpio').Gpio;
const {socket} = require('./socket');

class Button {
    constructor(internal_id, pin, led) {
        this.gpio = new Gpio(pin, {mode: Gpio.INPUT, alert: true})
        this.led = led;
        this.internal_id = internal_id;
        this.pressed = false

        this.init()

    }

    init() {

        // this.gpio.glitchFilter(500);

        this.gpio.on('alert', (level) => {
            if(!this.pressed){
                this.pressed = true
                if(this.led)
                    this.led.on();
                socket.emit('final-button', this.internal_id);
            }
        });
    }
}

module.exports.Button = Button;
