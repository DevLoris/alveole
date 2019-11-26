const Gpio = require('onoff').Gpio;
const {socket} = require('./socket');

class Button {
    constructor(internal_id, id, led) {
        this.gpio = new Gpio(id, 'in', 'both');
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