const {pushFinalButton} = require("../../structure/lib/behavior/push-final-button");
const {SPHERO_VARS} = require("../lib/sphero-vars");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('final-button', function (data) {
            if(!SPHERO_VARS.ALVEOLES[data - 1]) {
                console.log('FINAL BUTTON (' + data + ') PUSHED');
                io.emit('alveole', data);

                SPHERO_VARS.ALVEOLES[data - 1] = true;

                SpheroJsonAnim.play('totransparent', SPHERO_CACHE.get(SPHERO_VARS.BALL_3));

                pushFinalButton();
            }
        });
    });
};
