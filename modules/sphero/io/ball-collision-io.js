const {SPHERO_VARS} = require("../lib/sphero-vars");
const {TRANSFERT} = require("../lib/data-transfert/ball-transfert-list");
const {SPHERO_CACHE} = require("../lib/spherocache");
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('ball-collision', function (data) {
            let ball = SPHERO_CACHE.get(data);
            if(ball !== null) {
                console.log(data, data === SPHERO_VARS.BALL_1);
                let t = TRANSFERT.LIST.find(value => value.to_ball === data);
                if(t !== undefined)
                    t.call();
                else
                    console.log(`No transfer to ${data}`)
            }
        });
    });
};