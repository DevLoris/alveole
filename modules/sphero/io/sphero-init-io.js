const {Move} = require( "../lib/move/move");
const {MOVE_VARS} = require( "../lib/move/move-vars");

const {Color} = require("../lib/color");
const {SpheroJsonAnim} = require("../lib/utils/sphero-json-anim");
const {SpheroMatrix} = require("../lib/sphero-matrix");
const {Sphero} = require("../lib/sphero");
const _ = require("lodash");
const {pushFinalButton} = require("../../structure/lib/behavior/push-final-button");
const {PREMADE_MOVE} = require("../lib/move/premade-move");
const {SPHERO_VARS} = require("../lib/sphero-vars");
const {SPHERO_CACHE} = require("../lib/spherocache");
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('sphero-init', function (data) {
            console.log("CONNECTED SPHERO : ", data);
            SPHERO_CACHE.set(data, new Sphero(data, data === SPHERO_VARS.BALL_1));


            setTimeout(function () {
                if( data === SPHERO_VARS.BALL_1)
                    SpheroJsonAnim.play('nectar', SPHERO_CACHE.get(data));

                pushFinalButton(true);
                //SPHERO_CACHE.get(data).glitch();
                //SpheroJsonAnim.play('test-2', SPHERO_CACHE.get(data));

                //setInterval(function () {
                 //   SPHERO_CACHE.get(data).doCircle()
                    //SPHERO_CACHE.get(data).move(new Move(_.random(0, 359), MOVE_VARS.SPHERO.MEDIUM));
               // }, 1000)
            }, 10000)
        });
    });
};
