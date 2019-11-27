const {SpheroJsonAnim} = require("../lib/utils/sphero-json-anim");
const {SPHERO_VARS} = require("../lib/sphero-vars");
const {TRANSFERT} = require("../lib/data-transfert/ball-transfert-list");
const {SPHERO_CACHE} = require("../lib/spherocache");
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('spam-button', function () {
            console.log('spam');
            let ball = SPHERO_CACHE.get(SPHERO_VARS.BALL_2);
            //todo gérer le spam qui crash
            if(ball !== null && ball.state === SPHERO_VARS.STATES.NECTAR && SPHERO_VARS.isModuleActive(2)) {
                if(!ball.spamed) {
                    SpheroJsonAnim.play("miel-" + ball.spamed_time, ball, () => {
                        ball.unglitch();
                    });
                    ball.spamed = true;
                    ball.spamed_time++;
                    ball.glitch();
                    setTimeout(() => {
                        ball.spamed = false;
                    }, SPHERO_VARS.BEFORE_NEXT_SPAM)
                }

                if(ball.spamed > SPHERO_VARS.SPAM) {
                    ball.spamed_time = 0;
                    ball.state = SPHERO_VARS.STATES.MIEL;
                }

            }
        });
    });
};
