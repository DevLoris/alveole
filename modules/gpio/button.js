const Gpio = require('pigpio').Gpio;
const {SpheroJsonAnim} = require("../sphero/lib/utils/sphero-json-anim");
const {SPHERO_VARS} = require("../sphero/lib/sphero-vars");
const {SPHERO_CACHE} = require("../sphero/lib/spherocache");

class Button {

    constructor(pin) {
        this.pressed = false
        this.gpio = new Gpio(pin, {mode: Gpio.INPUT, alert: true})

        this.init();
    }

    init() {

        this.gpio.glitchFilter(10000);

        this.gpio.on('alert', (level) => {
            this.pressed = !level

            if(this.pressed){
                let ball = SPHERO_CACHE.get(SPHERO_VARS.BALL_2);
                console.log('btn : ', this.pressed);
                if(ball !== null && ball.state === SPHERO_VARS.STATES.NECTAR && SPHERO_VARS.isModuleActive(2)) {
                    if(!ball.spamed) {
                        SpheroJsonAnim.play("miel-" + ball.spamed_time, ball);
                        ball.spamed = true;
                        ball.spamed_time++;
                        ball.glitch();
                        setTimeout(() => {
                            ball.spamed = false;
                        }, SPHERO_VARS.BEFORE_NEXT_SPAM)
                    }

                    if(ball.spamed >= SPHERO_VARS.SPAM) {
                        ball.spamed_time = 0;
                        ball.state = SPHERO_VARS.STATES.MIEL;
                    }

                }
            }
        });
    }
}

module.exports.Button = Button;
