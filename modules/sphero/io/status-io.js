const {SPHERO_VARS} = require("../lib/sphero-vars");
const {SPHERO_CACHE} = require("../lib/spherocache");
require('dotenv').config();

let RASP_ENV = process.env.RASP
const fake_cache =
    {
        "cache": {
            "SB-5D1C": {
                "identifier": "SB-5D1C",
                "allowMove": false,
                "transfering": false,
                "spamed": false,
                "spamed_time": 0,
                "state": "NECTAR"
            },
            "SB-2020": {
                "identifier": "SB-2020",
                "allowMove": false,
                "transfering": false,
                "spamed": false,
                "spamed_time": 0,
                "state": "INACTIVE"
            },
            "SB-0994": {
                "identifier": "SB-0994",
                "allowMove": false,
                "transfering": false,
                "spamed": false,
                "spamed_time": 0,
                "state": "INACTIVE"
            }
        }
    }


module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('status', function () {
            client.emit('status', RASP_ENV,SPHERO_VARS, process.env.RASP === "oui" ?  SPHERO_CACHE : fake_cache)
        });
    });
};
