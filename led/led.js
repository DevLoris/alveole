const Gpio = require('onoff').Gpio;

class Led {
    constructor(id) {
        this.gpio = new Gpio(id, 'out')
        this.alive = true;
    }

    isTurnedOn() {
        return this.gpio.readSync() === 1;
    }

    on() {
        this.gpio.writeSync(1)
    }

    off() {
        this.gpio.writeSync(0)
    }

    free() {
        this.off();
        this.alive = false;
        this.gpio.unexport();
    }
}

module.exports.Led = Led;