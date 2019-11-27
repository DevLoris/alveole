const {pushFinalButton} = require("../../structure/lib/behavior/push-final-button");
const {SPHERO_VARS} = require("../lib/sphero-vars");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('final-button', function (data) {
            console.log('FINAL BUTTON ('+data+') PUSHED');
            io.emit('alveole', data);

            SPHERO_VARS.ALVEOLES[data - 1] = true;

            pushFinalButton();
        });
    });
};
