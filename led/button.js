const Gpio = require('onoff').Gpio;
const {socket} = require('./socket');

class Button {
    constructor(internal_id, pin, led) {
        this.gpio = new Gpio(pin, 'in', 'both');
        this.led = led;
        this.internal_id = internal_id;


        this.gpio.watch((err, value) => {
            if(led)
                led.on();
            socket.emit('final-button', this.internal_id);
        });
    }
}

module.exports.Button = Button;
