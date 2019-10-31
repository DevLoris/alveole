module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('socket-log', function (data) {

        });
    });
};