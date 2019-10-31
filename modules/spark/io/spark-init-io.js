
module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('spark-init', function () {
            console.log("CONNECTED SPARK");
        });
    });
};