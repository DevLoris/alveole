module.exports = function (io) {
    io.on('connection', function (client) {
        client.on('ball-collision', function (data) {
            console.log(data)
        });
    });
};