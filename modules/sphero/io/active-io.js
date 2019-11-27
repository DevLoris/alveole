const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('ball-allow-move', function (id, allowed) {
            let ball =  SPHERO_CACHE.get(id);
            ball.allowMove = allowed;
        });
    });
};