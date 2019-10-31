const {ML_CACHE} = require("../lib/mlcache");
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('save-movement', function (data) {
            ML_CACHE.push(data)
        });
    });
};