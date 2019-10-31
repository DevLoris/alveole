const {Color} = require("../lib/color");
const {SpheroMatrix} = require("../lib/sphero-matrix");
const {Sphero} = require("../lib/sphero");
const {SPHERO_CACHE} = require("../lib/spherocache");
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('sphero-init', function (data) {
            console.log("CONNECTED SPHERO : ", data);
            SPHERO_CACHE.set(data, new Sphero(data));

            /*setTimeout(function () {
                SPHERO_CACHE.get(data).matrix(new SpheroMatrix(
                    [
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0]
                    ],[
                        new Color(1, 0, 0)
                    ]
                ))
            }, 2000)*/
        });
    });
};