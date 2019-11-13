const Gpio = require('onoff').Gpio;

class Button {
    constructor(id, led) {
        this.gpio = new Gpio(id, 'in', 'both');
        this.led = led;


        this.gpio.watch((err, value) => led.toggle());
    }
}

module.exports.Button = Button;