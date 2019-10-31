const {MOVE_VARS} = require("../lib/move/move-vars");
const {Move} = require("../lib/move/move");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('ball-move', function (id, heading) {
            let ball =  SPHERO_CACHE.get(id);
            ball.move(new Move(heading, MOVE_VARS.DEFAULT_SPEED,  MOVE_VARS.DEFAULT_DURATION))
        });
    });
};