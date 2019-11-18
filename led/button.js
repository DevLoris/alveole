const Gpio = require('onoff').Gpio;

class Button {
    constructor(id, led) {
        this.gpio = new Gpio(id, 'in', 'both');
        this.led = led;


        this.gpio.watch((err, value) => led.on());
    }
}

module.exports.Button = Button;