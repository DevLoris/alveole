const {PREMADE_MOVE} = require("../lib/move/premade-move");
const {SPHERO_CACHE} = require("../lib/spherocache");

module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('ball-premade-move', function (id, move) {
            let ball =  SPHERO_CACHE.get(id);
            if(ball !== undefined) {
                let move = PREMADE_MOVE[move];
                if(move !== null) {
                    ball.move(move)
                }
            }
        });
    });
};