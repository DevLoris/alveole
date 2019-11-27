const {pushFinalButton} = require("../../structure/lib/behavior/push-final-button");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('final-button', function (data) {
            console.log('FINAL BUTTON ('+data+') PUSHED');
            io.emit('alveole', data);
            pushFinalButton();
        });
    });
};
