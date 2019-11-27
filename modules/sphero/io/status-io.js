const {SPHERO_VARS} = require("../lib/sphero-vars");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('status', function () {
            client.emit('status', SPHERO_VARS, SPHERO_CACHE)
        });
    });
};
