const Gpio = require('pigpio').Gpio;

class Button {

    constructor(pin) {
        this.pressed = false
        this.gpio = new Gpio(pin, {mode: Gpio.INPUT, alert: true})

        this.init();
    }

    init() {
        this.gpio.on('alert', (level) => {
            this.pressed = !level
            console.log('btn : ', this.pressed)
        });
    }
}

module.exports.Button = Button;
